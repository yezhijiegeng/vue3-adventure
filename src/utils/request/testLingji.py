from http import HTTPStatus
from dashscope import Generation
import dashscope
from dashscope.api_entities.dashscope_response import Role
 
 
def call_with_messages():
    dashscope.api_key = 'sk-abff2be7990c40d7b3ec51cd8833a225' # 将 YOUR_API_KEY 改成您创建的 API-KEY
    systemRole = input("请告诉我，我是什么角色：")
    userRole = input("请告诉我你要问什么：")
    messages = [{'role': 'system', 'content': systemRole}, 
                {'role': 'user', 'content': userRole}]
    gen = Generation()
    response = gen.call(
        Generation.Models.qwen_turbo,
        messages=messages,
        result_format='message', # 设置结果为消息格式
    )
    if response.status_code == HTTPStatus.OK:   
        print(response.output.choices[0]['message']['content'])  
        messages.append({'role': response.output.choices[0]['message']['role'], 
                         'content': response.output.choices[0]['message']['content']})
    else:
        print('Request id: %s, Status code: %s, error code: %s, error message: %s'%(
            response.request_id, response.status_code, 
            response.code, response.message
        ))
    while 1:
        question = input("还有什么问题吗？")
        if question == '':
            break
        messages.append({'role': Role.USER, 'content': question})
        response = gen.call(
            Generation.Models.qwen_turbo,
            messages=messages,
            result_format='message', # 设置结果为消息格式
        )
        if response.status_code == HTTPStatus.OK:   
            print(response.output.choices[0]['message']['content'])
        else:
            print('Request id: %s, Status code: %s, error code: %s, error message: %s'%(
                response.request_id, response.status_code, 
                response.code, response.message
            )) 
if __name__ == '__main__':
    call_with_messages()