// function lgselec(){
//     text= document.forms['lg-form']['languages'].value;
//     console.log(text)
//     const script = document.createElement('script');
//     script.setAttribute("src",'codemirror/mode'+'/'+text+'/'+text+'.js');
//     document.head.appendChild(script)
//     console.log('codemirror/mode'+'/'+text+'/'+text+'.js');
//     script.onload =()=>{ console.log('Script loaded successfully'); };
    
//     script.onerror =()=>{console.log('Error loading script');};
//     // var ed=document.createElement("textarea");
//     // ed.innerHTML='<textarea id="editor"></textarea>'
//     // document.body.appendChild(ed)
//     //return <textarea id='editor'></textarea>
// }

let seleccionar=document.querySelector('select');
seleccionar.addEventListener('change',establecerlenguaje);

function establecerlenguaje(){
    let eleccion=seleccionar.value;
    const bool_editor=!!document.getElementById('editor')
    const bool_editor_2=document.getElementById('editor')
    // const window_codemirror=document.querySelector("CodeMirror");
     if (bool_editor===true)
     {
        bool_editor_2.remove();
        // window_codemirror.remove();
     }
    if (eleccion==='python'){
        
        const script = document.createElement('script');
        script.setAttribute("src",'codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        document.head.appendChild(script)
        console.log('codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        script.onload =()=>{ console.log('Script loaded successfully'); };
        script.onerror =()=>{console.log('Error loading script');};
        

        const para = document.createElement("p");
        para.innerText = "Pantalla de " + eleccion;
        document.body.appendChild(para);
        
        var ed=document.createElement("textarea");
        ed.setAttribute("id","editor");
        document.body.appendChild(ed);
        var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
            mode:eleccion,
            lineNumbers: true,
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets:true
        })
    } else if(eleccion==='php'){
        const script = document.createElement('script');
        script.setAttribute("src",'codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        document.head.appendChild(script)
        console.log('codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        script.onload =()=>{ console.log('Script loaded successfully'); };
        script.onerror =()=>{console.log('Error loading script');};
        
        const para = document.createElement("p");
        para.innerText = "Pantalla de " + eleccion;
        document.body.appendChild(para);
        
        var ed=document.createElement("textarea");
        ed.setAttribute("id","editor");
        document.body.appendChild(ed);
        var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
            mode:eleccion,
            lineNumbers: true,
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets:true
        })

    } else if (eleccion ==='sql'){
        const script = document.createElement('script');
        script.setAttribute("src",'codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        document.head.appendChild(script)
        console.log('codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        script.onload =()=>{ console.log('Script loaded successfully'); };
        script.onerror =()=>{console.log('Error loading script');};

        const para = document.createElement("p");
        para.innerText = "Pantalla de " + eleccion;
        document.body.appendChild(para);
        
        var ed=document.createElement("textarea");
        ed.setAttribute("id","editor");
        document.body.appendChild(ed);
        var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
            mode:eleccion,
            lineNumbers: true,
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets:true
        })

    }else if (eleccion==='swift'){
        const script = document.createElement('script');
        script.setAttribute("src",'codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        document.head.appendChild(script)
        console.log('codemirror/mode'+'/'+eleccion+'/'+eleccion+'.js');
        script.onload =()=>{ console.log('Script loaded successfully'); };
        script.onerror =()=>{console.log('Error loading script');};
        
        const para = document.createElement("p");
        para.innerText = "Pantalla de " + eleccion;
        document.body.appendChild(para);
        
        var ed=document.createElement("textarea");
        ed.setAttribute("id","editor");
        document.body.appendChild(ed);
        var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
            mode:eleccion,
            lineNumbers: true,
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets:true
        })

    }else{
        const script = document.createElement('script');
        script.setAttribute("src",'codemirror/mode'+'/'+'htmlmixed'+'/'+'htmlmixed'+'.js');
        document.head.appendChild(script)
        console.log('codemirror/mode'+'/'+'htmlmixed'+'/'+'htmlmixed'+'.js');
        script.onload =()=>{ console.log('Script loaded successfully'); };
        script.onerror =()=>{console.log('Error loading script');};

        const para = document.createElement("p");
        para.innerText = "Pantalla de " + eleccion;
        document.body.appendChild(para);
        
        var ed=document.createElement("textarea");
        ed.setAttribute("id","editor");
        document.body.appendChild(ed);
        var editor = CodeMirror.fromTextArea(document.getElementById("editor"),{
            mode:eleccion,
            lineNumbers: true,
            theme: 'dracula',
            autoCloseTags: true,
            autoCloseBrackets:true
        })

    }

}




// editors.setPlaceholder('hola')
// editor.setSize("500","500");