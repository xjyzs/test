import requests
from requests.packages.urllib3.exceptions import InsecureRequestWarning

# 禁用 InsecureRequestWarning
requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
resp=requests.get('https://xjyzs.us.kg:1145',verify=False)
print(resp.text)