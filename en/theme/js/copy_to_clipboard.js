// init Bootstrap tooltips & popovers
    $("[data-toggle=popover]").popover();
    $("[data-toggle=tooltip]").tooltip();
    
    

/* copy demo sources to clipboard */
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
  return false;
}


$('body').find('.btn-pub-copy').each(function(){
    var $this = $(this);
    var content = $this.get(0).getAttribute("name");
    var lang = $this.get(0).getAttribute("lang");
    var title = (lang == "en") ? "Click to copy" : "Cliquer pour copier";
    
    $this.addClass("copyable");
    $this.tooltip({
        title: title,
        placement: 'right',
        trigger: 'hover',
	display: 'block'
    });
    
    $this.on('show.bs.tooltip', function(e) {
        if ($this.find('.btn-pub').length>0) {
            $this.tooltip('hide');
        }
    });

    var copiedTitle = (lang == "en") ? "Copied!" : "Copié !";
    
    $this.click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $this.tooltip('dispose');
        $this.tooltip({
            title: copiedTitle,
            fallbackPlacement:"clockwise",
            placement: 'right',
            trigger: 'hover'
        });
        $this.tooltip('show');
        copyTextToClipboard(content);
    }).mouseleave(function(){
        $this.tooltip('dispose');
        $this.tooltip({title:title, placement: 'right', trigger: 'hover'});
    });
});


function show_abstract(idnum) {
  var x = document.getElementById(idnum + "-abstract");
  var en = document.getElementById(idnum + "-toggle").getAttribute("data-en");
  var fr = document.getElementById(idnum + "-toggle").getAttribute("data-fr");
  if (x.innerHTML === fr) {
    x.innerHTML = en;
  } else {
    x.innerHTML = fr;
  }
}
