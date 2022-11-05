var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
    mode:'xml',
    lineNumbers: true,
    theme: 'dracula',
    mode: 'htmlmixed',
    autoCloseTags: true
})
editor.setSize("500","500");