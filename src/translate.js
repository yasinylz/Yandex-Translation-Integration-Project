
function Translate(text, sourceLanguage, targetLanguage){
  this.apikey = "PNEAH0d24yKi1gtxHLqCfmE5SH0d6n0c";
  this.text = text;
  this.sourceLanguage = sourceLanguage;
  this.targetLanguage = targetLanguage;
  this.xhr = new XMLHttpRequest();
}


Translate.prototype.translateWord = function(callback){
  const endpoint = `https://api.apilayer.com/language_translation/translate?source=${this.sourceLanguage}&target=${this.targetLanguage}`;
  this.xhr.open("POST", endpoint);
  this.xhr.setRequestHeader("apikey", this.apikey);
  this.xhr.setRequestHeader("Content-Type", "text/plain");

  this.xhr.onload = () => {
     
          if (this.xhr.status === 200) {
            const response = JSON.parse(this.xhr.responseText);
            const translatedText = response.translations; // API yanıtındaki çevrilen metni temsil eden alanı doğrulayın
            translatedText.forEach(langText => {

              callback( null,langText.translation);
              
            });
            
          } else {
            callback( "Bir Hata Oluştu",null);
          }
      
  };

  this.xhr.send(this.text);
};
Translate.prototype.changeWord=function(newWord,newLanguage){
  this.text =newWord;
  this.targetLanguage =newLanguage;
}
