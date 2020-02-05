export  default class ListsProcess {


  async getJsonWords(){
      return await  fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Words.json')
        
  }
  
  async getPhrases(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Phrases.json') 
  }

  async getPronunciation(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Pronunciation.json'); 
    }

  async getVerbs(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Verbs.json'); 
  }
   

   async getFood(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Foods.json');
    }
  
    async getDaysOfWeek(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/DaysOfWeek.json')   
    }

   async getHours(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Hours.json'); 
    }

   async getGreeting(){
        return await fetch('https://raw.githubusercontent.com/deborapesantos/EspanholParaViagemReactNative/master/Greeting.json'); 
    }

}