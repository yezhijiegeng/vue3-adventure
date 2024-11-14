<template>
    <div>
        <div style="height:calc(100vh);" ref="myPage">
            <RelationGraph ref="graphRef" :options="graphOptions" @node-expand="onNodeExpand"
                :on-canvas-click="onCanvasClick" :on-node-click="onNodeClick" @on-node-expand="onNodeExpandFunc"
                @node-collapse="onNodeCollapse">
                <template #node="{ node }">
                    <div class="nodeDiv">
                        <div :class="['my-card-body', setClassFunc(node)]" @mouseover="nodeMouseOver(node, $event)"
                            @mouseout="nodeMouseOut(node)" v-html="setTextFunc(node.text)"></div>
                    </div>
                </template>
                <template #graph-plug>
                    <div class="c-my-panel" style="padding: 10px;">
                        <el-button type="primary" :disabled="playing" size="large" @click="openAll">展开所有实控公司</el-button>
                    </div>
                </template>
            </RelationGraph>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, onMounted, reactive } from 'vue';
import RelationGraph from 'relation-graph-vue3';
import type { RGOptions, RGJsonData, RGNode, RGLine, RGLink, RGUserEvent, RelationGraphComponent } from 'relation-graph-vue3';
// import { indexJs2, indexJs3 } from "../js/index2"
// import { gvData } from '@/api/index/relation.api.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import graphData from "./data"

const myPage = ref();
const currentNodeObj = ref({})
const showNodeMenu = ref(false);
const nodeMenuPanelPosition = ref({ x: 0, y: 0 });
const nodeMenuPanel = ref({ x: 0, y: 0, width: 120, height: 120 });
const currentNode = ref<RGNode | null>(null);
const isShowNodeTipsPanel = ref(false);
const currentNodeData: any = reactive({
    id: '-1',
    reqType: '3',
    currentNodeClassName: ''
})




const g_loading = ref(true);
const graphOptions: RGOptions = {
    backgrounImageNoRepeat: true,
    moveToCenterWhenRefresh: true,
    zoomToFitWhenRefresh: true,
    useAnimationWhenRefresh: false,
    useAnimationWhenExpanded: true,
    reLayoutWhenExpandedOrCollapsed: true,
    defaultExpandHolderPosition: 'bottom',
    defaultNodeShape: 1,
    defaultNodeBorderWidth: 0,
    defaultLineShape: 2,
    defaultJunctionPoint: 'tb',
    lineUseTextPath: true,
    'defaultLineMarker': {
        'markerWidth': 20,
        'markerHeight': 20,
        'refX': 3,
        'refY': 3,
        'data': 'M 0 0, V 6, L 4 3, Z'
    },
    layouts: [
        {
            layoutName: 'tree',
            from: 'top',
            min_per_width: 160,
            levelDistance: '250,250,250,250'
        }
    ]
};

const graphRef = ref<RelationGraphComponent>();
const isRequires= ref(true)

onMounted(() => {

    setNode({ id: -1, reqType: '' })
});

const setTextFunc = (text: String) => {
    if (text.indexOf(';') == -1) return text
    let list = text.split(';')
    const arr: any = []
    list.forEach(i => {
        if (i.indexOf(':') != -1 || i.indexOf('：') != -1) {
            let s = i.split(':')
            arr.push({ title: i, arr: s })
        }
    })
    let srt = ''
    arr.forEach(item => {
        srt += `<div style="text-align: left;"><span>${item.arr[0]}：</span><span style="font-weight: 700;">${item.arr[1]}</span></div>`
    })
    return `<div style="width:100%;display:block">${srt}</div>`
}

const setClassFunc = (node: any) => {
    let classStr = ''
    if (node.data && node.data.type === 'ex-btn') {
        classStr = 'ex-btn-class'
    }
    if (node.data && node.data.type === 'ex-btn_rol') {
        // 一级
        classStr = 'ex-btn_rol-class'
    }
    if (node.data && node.data.type === 'ex-btn_rsl') {
        // 二级
        classStr = 'ex-btn_rsl-class'
    }
    if (node.data && node.data.type === 'ex-btn_sac') {
        // 实控
        classStr = 'ex-btn_sac-class'
    }
    if (node.data && node.data.type === 'ex-btn_srp') {
        // 人
        classStr = 'ex-btn_srp-class'
    }
    if (node.data && node.data.type === 'ex-btn_spp') {
        // 同一人高亮
        classStr = 'ex-btn_spp-class'
    }
    if (node.data && node.data.type === 'ex-btn_glp') {
        // 概览人员
        classStr = 'ex-btn_glp-class'
    }
    if (node.data && node.data.type === 'ex-btn_gsp') {
        // 同一实控
        classStr = 'ex-btn_gsp-class'
    }
    if (node.data && node.data.type === 'ex-btn_gjt') {
        // 根节点
        classStr = 'ex-btn_gjt-class'
    }





    return classStr
}


const setNode = async (objs) => {
    // const res = await gvData(objs)
    // const { Error, Data } = res.data.Response
    // const res = graphData
    debugger
    const { Error, Data } = graphData
    if (Error.Code != 0) return ElMessage({
        type: 'error',
        message: Error.Message,
    })
    showGraph(Data);

}



const showGraph = async (data: any) => {
    const edgeList = JSON.parse(JSON.stringify(data.edgeList))
    edgeList.forEach(item => {
        item.color = '#444'
        item.fontColor = '#1e6fff'
        item.lineWidth = 0.5
    })
    const __graph_json_data: RGJsonData = {
        rootId: '-1',
        nodes: data.nodeList,
        lines: edgeList
    };
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        graphInstance.loading();
        await graphInstance.setJsonData(__graph_json_data);
        await graphInstance.doLayout();
        await graphInstance.zoomToFit();
        graphInstance.clearLoading();
        await openByLevel(3);
    }
};

const onNodeExpand: any = async (node: RGNode, $event: RGUserEvent) => {
    const graphInstance = graphRef.value!.getInstance();
    if(!isRequires.value){
        // console.log('*************dfewfdfew1111111',isRequires.value)
        await graphInstance.doLayout();
        return;
    }
    if (!node!.data?.needLoadDataFromRemoteServer) {
        await graphInstance.doLayout();
        return;
    }
    if (node!.data?.childrenLoaded) {
        await graphInstance.doLayout();
        return;
    }
    // console.log('*************dfewfdfew',isRequires.value)
    g_loading.value = true;
    node!.data!.childrenLoaded = true;
    const id = node.id
    //   console.log(id,'获取id')
    const objs: any = {}
    if (currentNodeData.id == -1) {
        objs.id = id
        objs.reqType = 3
    } else {
        objs.id = currentNodeData.id
        objs.reqType = currentNodeData.reqType
    }
    const res = await gvData(objs)
    const { Error, Data } = res.data.Response
    if (Error.Code != 0) return ElMessage({
        type: 'error',
        message: Error.Message,
    })

    currentNodeData.id = '-1'
    currentNodeData.reqType = '3'

    loadChildNodesFromRemoteServer(node, Data, new_data => {
        g_loading.value = false;
        const graphInstance = graphRef!.value!.getInstance();
        // graphInstance.appendJsonData(new_data);
        graphInstance.appendJsonData(new_data);
    });
};
const loadChildNodesFromRemoteServer = (node: RGNode, data: any, callback: (new_data: RGJsonData) => void) => {
    const edgeList = JSON.parse(JSON.stringify(data.edgeList))
    edgeList.forEach(item => {
        item.color = '#444'
        item.fontColor = '#1e6fff'
        item.lineWidth = 0.5
    })
    setTimeout(function () {
        const _new_json_data: RGJsonData = {
            nodes: data.nodeList,
            lines: edgeList
        };
        callback(_new_json_data);
    }, 100);
};
const onNodeCollapse: any = async (node: RGNode, $event: RGUserEvent) => {

};



const onNodeExpandFunc: any = (nonde: any) => {
    // console.log(nonde, 'nodne')
    return false

}




const openByLevel = async (level: number) => {
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        graphInstance.getNodes().forEach(node => {
            node.expanded = true;
            node.alignItems = 'top';
        });
        graphInstance.getNodes().forEach(node => {
            const level: any = node.lot.level
            node.className = 'my-industy-node-level-' + Math.abs(level);
        });
        graphInstance.getNodes().forEach((item:any) => {
            const levels: any = item.lot.level
            if ((setItemText(item.text) && !item.lot.level) || Math.abs(levels) >= level) {
                item.expanded = false;
            }else{
                item.data.needLoadDataFromRemoteServer = false
            }
        });

        await graphInstance.doLayout();
    }
};
const setItemText = (text) => {
    let is = false
    if (text.indexOf('一级') !== -1 || text.indexOf('二级') !== -1 || text.indexOf('实控公司') !== -1) {
        is = true
    }

    return is
}

const onNodeClick = (nodeObject: RGNode, $event: RGUserEvent) => {
    console.log('nodeObject:', nodeObject);
    currentNode.value = nodeObject;
    // currentNodeId.value = 
    updateNodeMenuPosition();
    showNodeMenu.value = true;
};
const updateNodeMenuPosition = () => {
    if (!currentNode.value) return;
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        const _base_position = graphInstance.getBoundingClientRect();
        const viewCoordinate = graphInstance.getViewPointByCanvasPoint({
            x: currentNode.value.x + currentNode.value.el.offsetWidth / 2,
            y: currentNode.value.y + currentNode.value.el.offsetHeight / 2
        });
        // console.log('showNodeMenus:', viewCoordinate, _base_position);
        nodeMenuPanel.value.x = viewCoordinate.x - nodeMenuPanel.value.width / 2;
        nodeMenuPanel.value.y = viewCoordinate.y - nodeMenuPanel.value.height / 2;
    }
};


const onCanvasClick = () => {
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        graphInstance.clearChecked();
    }
    showNodeMenu.value = false;
};


const nodeMouseOver = (currentNode: any, $event) => {
    console.log(currentNode)
    currentNodeData.currentNodeClassName = currentNode.className
    // return
    const graphInstance = graphRef.value!.getInstance();
    for (const node of graphInstance.getNodes()) {
        currentNode.className = '';
    }
    currentNode.className = 'my-node-highlight';
    for (const link of graphInstance.getLinks()) {
        if (link.fromNode === currentNode || link.toNode === currentNode) {
            for (const line of link.relations) {
                line.className = 'my-line-highlight';
                // line.lineWidth = 3;
            }
        } else {
            for (const line of link.relations) {
                line.className = '';
                // line.lineWidth = graphOptions.defaultLineWidth;
            }
        }
    }

    currentNodeObj.value = currentNode;
    const _base_position = myPage.value.getBoundingClientRect();
    // console.log('showNodeMenus:', $event.clientX, $event.clientY, _base_position);
    isShowNodeTipsPanel.value = true;
    nodeMenuPanelPosition.value.x = $event.clientX - _base_position.x + 10;
    nodeMenuPanelPosition.value.y = $event.clientY - _base_position.y + 10;
};
const nodeMouseOut = (currentNode: RGNode) => {
    isShowNodeTipsPanel.value = false;
    const graphInstance = graphRef.value!.getInstance();
    for (const node of graphInstance.getNodes()) {
        currentNode.className = currentNodeData.currentNodeClassName;
    }
    setHighlightLine();
};
const setHighlightLine = () => {
    const graphInstance = graphRef.value!.getInstance();
    for (const link of graphInstance.getLinks()) {
        for (const line of link.relations) {
            line.className = '';
            // line.lineWidth = graphOptions.defaultLineWidth;
        }
    }
};


const openAll = async() => {
    isRequires.value = false
    // alert('展开所有节点功能实现中')
    const objs={
        id:'',
        reqType:'all'
    }
    const res = await gvData(objs)
    const { Error, Data } = res.data.Response
    if (Error.Code != 0) return ElMessage({
        type: 'error',
        message: Error.Message,
    })
    
    setNodeFunc(Data)
}
const setNodeFunc = async(data:any) =>{
    const edgeList = JSON.parse(JSON.stringify(data.edgeList))
    edgeList.forEach(item => {
        item.color = '#444'
        item.fontColor = '#1e6fff'
        item.lineWidth = 0.5
    })
    const __graph_json_data: any = {
        rootId: '-1',
        nodes: data.nodeList,
        lines: edgeList
    };
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        graphInstance.loading();
        await graphInstance.setJsonData(__graph_json_data);
        await graphInstance.doLayout();
        await graphInstance.zoomToFit();
        graphInstance.clearLoading();
        await openAllsFunc()
        
        // await openByLevel(3);
    }
}
const playing = ref(false)
const openAllsFunc = async () => {
    playing.value = true;
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        graphInstance.graphData.nodes.forEach(n => {
            if (n.lot.childs.length > 0) {
                n.expanded = false;
                n.data!.needLoadDataFromRemoteServer = false
            }
        });
        await deepExpandNode(graphInstance.graphData.rootNode);
    }
    playing.value = false;
    isRequires.value = true
    // console.log('222',playing.value)
};
const deepExpandNode = async (node: RGNode) => {
    if (node.lot.childs.length === 0) {
        return;
    }
    const graphInstance = graphRef.value?.getInstance();
    if (graphInstance) {
        await graphInstance.expandNode(node);
        for (let i = 0; i < node.lot.childs.length; i++) {
            const cnode = node.lot.childs[i];
            await deepExpandNode(cnode);
        }
    }
};





</script>

<style lang="scss" scoped>
::v-deep(.relation-graph .rel-node-checked) {
    box-shadow: none
}

::v-deep(.c-expand-positon-bottom .c-btn-open-close) {
    background-color: #0052D9 !important
}

::v-deep(.relation-graph .rel-node-shape-1) {
    background: #fff !important;
}

.nodeDiv {
    // width: 140px;
    line-height: 25px;
    // border: 1px solid #0052D9;
    border-radius: 10px;
    background-color: #fff;

    // padding: 0 20px;
    .my-card-body {
        // background: #0052D9;
        background: #3C8CE6;
        color: #fff;
        font-size: 18px;
        min-height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        width: 240px;
        border-radius: 10px;
    }

    .ex-btn-class {
        background-color: #8167F5;
        width: 120px;
    }

    .ex-btn_rol-class {
        // background-color: #0079FE;
        background: #dbe9f6;
        width: 120px;
        color: #000;
        border: 1px solid #3399FF;
    }

    .ex-btn_rsl-class {
        // background-color: #3399FF;
        border: 1px solid #3399FF;
        background: #f7fbfe;
        color: #000;
        width: 120px;
    }

    .ex-btn_sac-class {
        background-color: #589ff8;
        width: 120px;
    }

    .ex-btn_srp-class {
        background-color: #e28334;
        width: 120px;
    }

    .ex-btn_spp-class {
        background: #FF5C00;
        width: 120px;
    }

    .ex-btn_glp-class {
        background-color: #e28334;
        // background: #fff;
        border-radius: 50%;
        // border: 1px solid #FF9900;
        width: 80px;
        height: 80px;
        // color:#FF9900 ;
        color: #fff;
    }

    .ex-btn_gsp-class {
        background: #fff;
        width: 140px;
        border-radius: 10px;
        // border: 1px solid #e28334;
        background: #e28334;
        color: #fff;
    }

    .ex-btn_gjt-class {
        background: #fff;
        width: 240px;
        border-radius: 10px;
        border: 2px dashed #e28334;
        color: #e28334;
    }
}









.my-industy-node {
    width: 140px;
    border-radius: 5px;
    background-color: #ffffff;
    overflow: hidden;

    .my-card-body {
        line-height: 30px;
        color: #000;
        // border: 1px solid #000;
    }
}

::v-deep(.rel-node-shape-1 .rel-node-type-node .rel-node) {
    border: none !important;
    background: #fff;
}

::v-deep(.my-industy-node-level-0) {
    cursor: pointer;

    .my-industy-node {
        width: 180px;
        border: #5b05f1 solid 1px;

        .my-card-header {
            background-color: #5b05f1;
        }

        .my-card-body {
            color: #5b05f1;
            font-size: 18px;
            line-height: 50px;
            height: 50px;
        }
    }

    .c-btn-open-close {
        & span {
            background-color: #5b05f1 !important;
        }
    }
}

::v-deep(.my-industy-node-level-1) {
    cursor: pointer;

    .my-industy-node {
        border: #FD8B37 solid 1px;

        .my-card-header {
            background-color: #FD8B37;
        }

        .my-card-body {
            color: #FD8B37;
            font-size: 16px;
        }
    }

    .c-btn-open-close {
        & span {
            background-color: #FD8B37 !important;
        }
    }
}

::v-deep(.my-industy-node-level-2) {
    cursor: pointer;

    .my-industy-node {
        // border: #9b9903 solid 1px;

        .my-card-header {
            background-color: #9b9903;
        }

        .my-card-body {
            color: #9b9903;
        }
    }

    .c-btn-open-close {
        & span {
            background-color: #9b9903 !important;
        }
    }
}

::v-deep(.my-industy-node-level-3) {
    cursor: pointer;

    .my-industy-node {
        // border: #247c02 solid 1px;

        .my-card-header {
            background-color: #247c02;
        }

        .my-card-body {
            color: #247c02 !important;
            font-size: 12px;
        }
    }

    .c-btn-open-close {
        & span {
            background-color: #247c02 !important;
        }
    }
}

::v-deep(.my-industy-node-level-4) {
    cursor: pointer;

    .my-industy-node {
        border: #fff solid 1px;

        .my-card-header {
            background-color: #247c02;
        }

        .my-card-body {
            color: #247c02 !important;
            font-size: 12px;
        }
    }

    .c-btn-open-close {
        & span {
            background-color: #247c02 !important;
        }
    }
}


::v-deep(.relation-graph) {
    .rel-node-shape-0 {
        padding: 3px !important;
    }
}

// ------------------------Node slot---------------------------------
.my-node-style {
    background-position: center center;
    background-size: 100%;
    height: 100%;
    width: 100%;
    border-radius: 40px;
    overflow: visible;
}

.c-node-name {
    width: 80px;
    text-align: center;
    color: #2E74B5;
    margin-top: 10px;
}

// --------------------------Node menu-----------------------
@keyframes growUp {
    from {
        scale: 10%;
        rotate: 0deg;
    }

    50% {
        scale: 30%;
        rotate: 90deg;
    }

    to {
        scale: 100%;
        rotate: 360deg;
    }
}

.c-surround-menu-panel {
    position: absolute;
    width: 160px;
    height: 160px;
    z-index: 999;
    animation: growUp 0.5s linear;
    box-shadow: 0 0 0 38px rgba(255, 255, 255, 0.56) inset;
    border-radius: 50%;
}

.c-svg-button {
    fill: rgba(26, 22, 28, 0.65);
    cursor: pointer;
}

.c-svg-bottom-text {
    cursor: pointer;
    color: #ffffff;
}

.c-svg-button:hover {
    fill: rgba(26, 23, 28, 0.85);
}

@keyframes node-text-in {
    from {
        opacity: 0;
    }

    50% {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.c-current-node-text {
    position: absolute;
    top: calc(100% + 16px);
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    animation: node-text-in 1s linear;

    input {
        background-color: rgba(35, 30, 37, 0.68);
        color: #ffffff;
        border-radius: 5px;
        width: 100%;
        padding-left: 10px;
        padding-right: 10px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border-width: 0px;

        &:focus {
            background-color: #dfac03;
        }
    }
}

// --------------------------Node info card-----------------------
.c-operate-panels {
    position: absolute;
    z-index: 700;
    left: 30px;
    top: 30px;
    width: 200px;
}

.c-node-info-card {
    text-align: left;
    padding: 10px;
    background-color: rgba(233, 210, 243, 0.68);
    border-radius: 10px;
    font-size: 12px;
    line-height: 25px;
}

.c-person-pic {
    width: 120px;
    border-radius: 50%;
    margin-top: 10px;
}

// --------------------------Node options panel-----------------------
.c-node-options-panel {
    border-radius: 10px;
    font-size: 12px;
    line-height: 25px;
    margin-top: 20px;
}

::v-deep(.relation-graph) {
    .my-line-highlight {
        .c-rg-line {
            animation: my-line-anm2 2s infinite;
            stroke: rgba(22, 11, 231, 0);
            stroke-width: 0px;
            stroke: #2409ee !important;
        }

        .c-rg-line-text {
            animation: my-line-text-anm2 2s infinite;
            text-anchor: middle;
            fill: rgb(251, 6, 6) !important;
        }
    }
}


@keyframes my-line-anm2 {
    from {
        stroke-dashoffset: 0;
        stroke-dasharray: 4, 4, 4;
        fill: rgba(75, 28, 119, 1) !important;
    }

    to {
        stroke-dashoffset: 0.1px;
        stroke-dasharray: 20, 20, 20;
        fill: rgba(75, 28, 119, 1) !important;
    }
}




.c-my-panel {
    position: absolute;
    left: 10px;
    top: 10px;
    border-radius: 10px;
    z-index: 800;
    background-color: #efefef;
    border: #eeeeee solid 1px;
    padding: 20px;

    .c-option-name {
        color: #666666;
        font-size: 14px;
        line-height: 40px;
        padding-left: 10px;
        padding-right: 10px;
    }
}
</style>