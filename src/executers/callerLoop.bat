@echo off
:loop
node C:\Workspace\SavePageAsPDF\src\generatePdf.js
timeout /t 60
goto loop