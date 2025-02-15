import { serve } from "https://deno.land/std@0.150.0/http/server.ts";
const kv = await Deno.openKv();
let txt=""
const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'POST') {
    const formData = await req.formData();
    const txt = formData.get('txt') as string;
    await kv.set(["TEXT"], txt);
    return new Response(`<meta http-equiv="refresh" content="0">`,{headers: {"Content-Type": "text/html"},});
  } else {
    try {
      txt = (await kv.get(["TEXT"])).value as string;
      txt=txt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }catch(_){
      txt="暂无数据"
    }
    return new Response(
        `<!DOCTYPE html><html lang="zh-cn">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>网络剪贴板</title>
      <style>
      body {background-color: #F1FCF3;}
      p {font-size:26px;word-break:break-all;margin:10px;}
      pre {font-size:26px;word-break:break-all;margin:10px;}
      textarea {font-family: inherit;font-size:16px;background-color: inherit;}
      button {font-size: 16px;}
      </style>
      <p style="font-size: 50px;">网络剪贴板</p>
  </head>
  <form method="post">
    <div style="display: flex;align-items: stretch;">
      <textarea name="txt" rows="1" oninput="resizeTextarea(this)" style="flex: 1; resize: none" id="cin"></textarea>
      <input type="submit" value="提交" style="align-self: stretch;height: auto;margin-left: 4px;">
    </div>
  </form><br>
  <button onclick="location.reload();">刷新</button>&emsp;<button onclick="copyText('0')">复制</button><br><br>
  <textarea readonly style="width: 100%;resize: none;border: none; outline: none;" id='0'>
${txt}</textarea>
  <script>
      function resizeTextarea(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.style.height = (textarea.scrollHeight) + 'px';
      }
      function copyText(id) {
          const copyText = document.getElementById(id);
          copyText.select();
          copyText.setSelectionRange(0, 99999);
          document.execCommand("copy");
      }
      resizeTextarea(textarea=document.getElementById('0'))
      resizeTextarea(textarea=document.getElementById("cin"))
  </script>`,
        {
          headers: {"Content-Type": "text/html"},
        }
    );
  }
};


await serve(handler, { port: 80 });
