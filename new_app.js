function workingButtons(digits, words) {

       // all digts and chars can be written
       const allowed_chars = ["a", "b", "c", "d", "e", "f"];
       const allowed_dights = [2, 3]; 
       
       let indexer = 0;
       let indexch = 0;
       let word_length = words.length;
       let true_dight = 0;
       let true_char = 0;
       let response = [];
     for (let i=0; i < digits.length; i++) {
       
       //check for allowed dights
       if (allowed_dights.includes(digits[i])) {
         
         indexer += 1;
         if (i == digits.length - 1) {
         if (indexer == digits.length) {
           
           true_dight += 1;
           //alert("Availbe dight" + true_dight);
         } 
         }
         //alert(word_length);
       } 
       
       
       // check for words
       if (word_length > 0) {
           for (let i=0; i < words.length; i++) {
       
       //check for allowed dights
       if (allowed_chars.includes(words[i])) {
         
         indexch += 1;
         if (i == words.length - 1) {
         if (indexch == words.length) {
           
           true_char += 1;
           //alert("Availbe char" + true_char);
         } 
         }}
         //alert(word_length);
       } 
       }
       
      if (true_dight > 0) {
  response[0] = true;
} else {
  response[0] = false;    
}

if (true_char > 0) {
  response[1] = true;
} else {
  response[1] = false;
}


      }
      alert(response); 
     }



workingButtons([2, 3], ['a', 'g']);
