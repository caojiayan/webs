<%
  Response.Buffer = True
  Server.ScriptTimeOut=9999999
  On Error Resume Next
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<meta http-equiv="Content-Language" content="zh-cn" />
<meta content="all" name="robots" /> 
<div style="display:none"><script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1259594644'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s4.cnzz.com/z_stat.php%3Fid%3D1259594644' type='text/javascript'%3E%3C/script%3E"));</script></div>
<style type="text/css">
<!--
body,input {font-size:12px;}
-->
</style>
<title>��ͼƬ�ϴ�����</title>
</head>
<body id="body">
<%
  ExtName = "jpg,gif,png,txt,rar,zip,doc,bmp"    '������չ��
  SavePath = "./"          '����·��
  If Right(SavePath,1)<>"/" Then SavePath=SavePath&"/" '��Ŀ¼���(/)
  CheckAndCreateFolder(SavePath)

  UpLoadAll_a = Request.TotalBytes 'ȡ�ÿͻ���ȫ������
  If(UpLoadAll_a>0) Then
    Set UploadStream_c = Server.CreateObject("ADODB.Stream")
    UploadStream_c.Type = 1
    UploadStream_c.Open
    UploadStream_c.Write Request.BinaryRead(UpLoadAll_a) 
    UploadStream_c.Position = 0

    FormDataAll_d = UploadStream_c.Read
    CrLf_e = chrB(13)&chrB(10)
    FormStart_f = InStrB(FormDataAll_d,CrLf_e)
    FormEnd_g = InStrB(FormStart_f+1,FormDataAll_d,CrLf_e)

    Set FormStream_h = Server.Createobject("ADODB.Stream")
    FormStream_h.Type = 1
    FormStream_h.Open
    UploadStream_c.Position = FormStart_f + 1
    UploadStream_c.CopyTo FormStream_h,FormEnd_g-FormStart_f-3
    FormStream_h.Position = 0
    FormStream_h.Type = 2
    FormStream_h.CharSet = "GB2312"
    FormStreamText_i = FormStream_h.Readtext
    FormStream_h.Close

    FileName_j = Mid(FormStreamText_i,InstrRev(FormStreamText_i,"\")+1,FormEnd_g)

    If(CheckFileExt(FileName_j,ExtName)) Then
      SaveFile = Server.MapPath(SavePath & "down.gif")

      If Err Then
        Response.Write "�ļ��ϴ��� <span style=""color:red;"">�ļ��ϴ�����!</span> <a href=""" & Request.ServerVariables("URL") &""">�����ϴ��ļ�</a><br />"
        Err.Clear
      Else
        SaveFile = CheckFileExists(SaveFile)

        k=Instrb(FormDataAll_d,CrLf_e&CrLf_e)+4
        l=Instrb(k+1,FormDataAll_d,leftB(FormDataAll_d,FormStart_f-1))-k-2
        FormStream_h.Type=1
        FormStream_h.Open
        UploadStream_c.Position=k-1
        UploadStream_c.CopyTo FormStream_h,l
        FormStream_h.SaveToFile SaveFile,2
        
        SaveFileName = Mid(SaveFile,InstrRev(SaveFile,"\")+1)
        Response.write "�ļ��ϴ��� <span style=""color:red;"">" & SaveFileName & " </span>�ļ��ϴ��ɹ�! <a href=""" & Request.ServerVariables("URL") &""">�����ϴ��ļ�</a><br />"
      End If
    Else
      Response.write "�ļ��ϴ��� <span style=""color:red;"">�ļ���ʽ����ȷ!</span> <a href=""" & Request.ServerVariables("URL") &""">�����ϴ��ļ�</a><br />"
    End If

  Else
%>
<script language="Javascript">
<!--
function ValidInput()
{
    
if(document.upform.upfile.value=="") 
  {
    alert("��ѡ���ϴ��ļ���")
    document.upform.upfile.focus()
    return false
  }
  return true
}
// -->
</script>
<form action='<%= Request.ServerVariables("URL") %>' method='post' name="upform" onsubmit="return ValidInput()"  enctype="multipart/form-data">
�ļ��ϴ���
<input type='file' name='upfile' size="40"> <input type='submit' value="�ϴ�">
</form>
<%
  End if
  Set FormStream_h = Nothing
  UploadStream.Close
  Set UploadStream = Nothing
%>
</body>
</html>
<%
  '�ж��ļ������Ƿ�ϸ�
  Function CheckFileExt(FileName,ExtName) '�ļ���,�����ϴ��ļ�����
    FileType = ExtName 
    FileType = Split(FileType,",")
    For i = 0 To Ubound(FileType)
      If LCase(Right(FileName,3)) = LCase(FileType(i)) then
      CheckFileExt = True
      Exit Function
      Else
      CheckFileExt = False
      End if
    Next
  End Function

  '����ϴ��ļ����Ƿ���ڣ��������򴴽��ļ���
  Function CheckAndCreateFolder(FolderName)
    fldr = Server.Mappath(FolderName)
    Set fso = CreateObject("Scripting.FileSystemObject")
    If Not fso.FolderExists(fldr) Then
      fso.CreateFolder(fldr)
    End If
    Set fso = Nothing
  End Function


  
'����ļ��Ƿ���ڣ����ھ�ɾ������
Function CheckFileExists(FileName)
  Set fso=Server.CreateObject("Scripting.FileSystemObject")
  If fso.FileExists(SaveFile) Then
    i=1
    msg=True
    Do While msg
	fso.DeleteFile(FileName)
      CheckFileExists = SaveFile
      If not fso.FileExists(CheckFileExists) Then
        msg=False
      End If
      i=i+1
    Loop
  Else
    CheckFileExists = FileName
  End If
  Set fso=Nothing
End Function
%>