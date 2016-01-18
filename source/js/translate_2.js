  document.onreadystatechange = function () {
      if (document.readyState == 'complete') {
          Microsoft.Translator.Widget.Translate('en', 'nl');
      }
  }