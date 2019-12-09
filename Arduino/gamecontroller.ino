
const int buttonPin = 3; 
const int buttonTwoPin = 6; 
int knob = 0;
int val;
int pos; 
//int positions = [];
void setup() {
  pinMode(buttonPin, INPUT);
  pinMode(buttonTwoPin, INPUT);
  Serial.begin(9600);
  // put your setup code here, to run once:
}

void loop() {
  val = analogRead(knob); 
  int switchState = digitalRead(buttonPin);
  int switchStateTwo = digitalRead(buttonTwoPin); 
  // put your main code here, to run repeatedly:
 // positions = pos;
  
  //Serial.write(pos);
  //Serial.write(pos);
  //Serial.write(switchState);
  //Serial.write(switchStateTwo);
  Serial.write(val);
  //Serial.print(sensorValue);
//  Serial.println("button: ");
//  Serial.print(switchState);
//  Serial.println("button 2: ");
//  Serial.print(switchStateTwo);
}
