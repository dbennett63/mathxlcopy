# mathxlcopy

This is a chrome extension to allow copying of tabular text from myfinancelab and myeconlab in pearson study guides. For some reason they have a CSS class on the spans that prevents text selection. This forces users to manually transpose spreadsheets, which is tedious and error-prone.

The functionality simply looks for a span tag eqDocument and removes it. All non-selectable spans share this value. Script has been tested in debugger, but struggling to resolve some CORS issues. You can see some troubleshooting and some domains in question in the manifest.json - really need to understand how to access and manipulate the DOM in the 2nd level nested iFrame. Can do through Chrome debugger by just selecting from a dropdown.
