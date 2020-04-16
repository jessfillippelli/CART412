
//https://www.instructables.com/id/Arduino-Reed-Switch/
//https://learn.sparkfun.com/tutorials/reed-switch-hookup-guide/all

#include "Talkie.h"
#include "Vocab_US_Large.h"
#include "Vocab_Special.h"

const int REED_PIN = A3; // Pin connected to reed switch

Talkie voice;
int counter = 0;
int currentState = 0;
int prevState  = 0;
long startTime = 0;
long timePassed =0;
bool setTimer =false;

void setup()
{
  Serial.begin(9600);
  // Since the other end of the reed switch is connected to ground, we need
  // to pull-up the reed switch pin internally.
  pinMode(REED_PIN, INPUT_PULLUP);

}

void loop() {
  int proximity = digitalRead(REED_PIN);
  //Serial.println(proximity);
 // delay(100);
  if (proximity == HIGH ) // If the pin reads low, the switch is closed.
  {
    currentState = 1;

    
    if (currentState != prevState) {
//      restart timer
      startTime = millis();
      setTimer =true;
      counter = counter + 1;
      Serial.print("COUNTER::");
      Serial.println(counter);
    }
    
    
  }
//  proximity is low
  else{
    if(setTimer ==true){
      timePassed  = millis() - startTime;
//      revolutions done
      if(timePassed > 2000){
//        how many revolutions?
//       speak counter val
        sayCounter();
//        reset counter
        counter =0;
        Serial.println("sTopped");
        setTimer =false;
      }
    }
    currentState = 0;
  }
  prevState = currentState;

  //delay(100);


}//end of loop

void sayCounter(){
  if(counter ==2){
            voice.say(sp2_TWO);
        }
        if(counter ==3){
            voice.say(sp2_THREE);
        }
        if(counter ==4){
            voice.say(sp2_FOUR);
        }
        if(counter ==5){
            voice.say(sp2_FIVE);
        }
         if(counter ==6){
            voice.say(sp2_SIX);
        }
         if(counter ==7){
            voice.say(sp2_SEVEN);
        }
          if(counter ==8){
            voice.say(sp2_EIGHT);
        }
          if(counter ==8){
            voice.say(sp2_EIGHT);
        }
          if(counter ==9){
            voice.say(sp2_NINE);
        }

}
