// what helps the sound from the speaker
#include "Talkie.h"
#include "Vocab_US_Large.h"
#include "Vocab_Special.h"



//define two button vars
#define BUTTON_PIN_1 7
#define BUTTON_PIN_2 9
#define ARRAY_TEST_NUM 5
#define ARRAY_TEST_NUM_TWO 5

Talkie voice;

int prevButtonValOne = 0;
int buttonPushCounterOne = 0;   // counter for the number of button presses

int prevButtonValTwo = 0;
int buttonPushCounterTwo = 0;   // counter for the number of button presses

/** FOR VALUES IN ARRAY SEE Vocab_US_Large.h */
//array to hold possible values that the voice will utter FOR BUTTON ONE
//AS AN EXAMPLE WILL SPEAK VALUES 2-6
uint8_t * arrayTest[ARRAY_TEST_NUM]={sp3_TWO,sp3_THREE,sp3_FOUR,sp3_FIVE,sp3_SIX};


//array to hold possible values that the voice will utter FOR BUTTON TWO
//AS AN EXAMPLE WILL SPEAK VALUES 2-6
uint8_t * arrayTestTwo[ARRAY_TEST_NUM_TWO]={sp3_SEVEN,sp3_EIGHT,sp3_NINE,sp3_TEN,sp3_ELEVEN};



void setup() {
  pinMode(BUTTON_PIN_1, INPUT);
  pinMode(BUTTON_PIN_2, INPUT);
  Serial.begin(9600);

//   voice.say(sp2_WELCOME);
//    voice.say(sp2_TO);
//    voice.say(sp2_MY);
//    voice.say(sp2_PROJECT);
//    voice.say(sp2_THE);
//    voice.say(sp2_GAME);
//    voice.say(sp2_OF);
//    voice.say(sp2_DISTRACTION);

}


void loop() {

/* FOR BUTTON ONE */
  int buttonValOne = digitalRead(BUTTON_PIN_1); // read value from button
  
  // compare the buttonState to its previous state
  if (buttonValOne != prevButtonValOne) {
    // if the state has changed, increment the counter
    
    if (buttonValOne == HIGH) {
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounterOne++;

      //make a random num
      int randomNum = random(ARRAY_TEST_NUM);
      speakNumP1(randomNum);
      
    } 
    
    else {
      // if the current state is LOW then the button went from on to off:
      Serial.println("one is off");
    }
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  prevButtonValOne = buttonValOne;

  /* FOR BUTTON TWO */
  int buttonValTwo = digitalRead(BUTTON_PIN_2); // read value from button

  // compare the buttonState to its previous state
  if (buttonValTwo != prevButtonValTwo) {
    // if the state has changed, increment the counter
    
    if (buttonValTwo == HIGH) {
      // if the current state is HIGH then the button went from off to on:
      buttonPushCounterTwo++;
 
      //make a random num
      int randomNumTwo = random(ARRAY_TEST_NUM_TWO);
      speakNumP2(randomNumTwo);
      
    } 
    
    else {
      // if the current state is LOW then the button went from on to off:
      Serial.println("one is off");
    }
    // Delay a little bit to avoid bouncing
    delay(50);
  }
  // save the current state as the last state, for next time through the loop
  prevButtonValTwo = buttonValTwo;

  }

  void speakNumP1(int choice){
      Serial.print("the choice::");
      Serial.println(choice);
      voice.say(arrayTest[choice]);

 }

   void speakNumP2(int choice){
      Serial.print("the choice::");
      Serial.println(choice);
      voice.say(arrayTestTwo[choice]);

 }
