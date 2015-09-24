<?php

class MessageController {

  // some framework stuff
  
  public function incoming($request) {
      // $message: retrieve the message given in telegram.json, facebook.json or whatsapp.xml
      $message = $request->input('message');
     
      // convert messages
      
      return true;
  }
  
  // other methods
}

?>
