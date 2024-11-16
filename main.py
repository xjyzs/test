import requests

url = "https://comments.xjyzs.us.kg"

params = {
  'id': "welcome"
}

payload = "txt=actions%E6%B5%8B%E8%AF%95"

headers = {
  'User-Agent': "Mozilla/5.0 (Linux; Android 13; M2011K2C Build/SKQ1.211006.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/104.0.5112.97 Mobile Safari/537.36 T7/12.16 SearchCraft/3.9.1 (Baidu; P1 11)",
  'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  'Accept-Encoding': "gzip, deflate",
  'Content-Type': "application/x-www-form-urlencoded",
  'cache-control': "max-age=0",
  'upgrade-insecure-requests': "1",
  'origin': "https://comments.xjyzs.us.kg",
  'x-requested-with': "mark.via",
  'sec-fetch-site': "same-origin",
  'sec-fetch-mode': "navigate",
  'sec-fetch-user': "?1",
  'sec-fetch-dest': "object",
  'referer': "https://comments.xjyzs.us.kg/?id=welcome",
  'accept-language': "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
}

response = requests.post(url, params=params, data=payload, headers=headers)

print(response.text)