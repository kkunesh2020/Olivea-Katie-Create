var WINDOW_WIDTH = 1000;
var WINDOW_HEIGHT = 600;
var BACKGROUND_COLOR = color(190, 249, 255);
// Declare and contruct two objects (slowLine, fastLine) from the class HorizontalLine
HorizontalLine slowLine = new HorizontalLine(20, 2.0);

HorizontalLine fastLine = new HorizontalLine(50, 2.5);

Tree testTree = new Tree(400);

//since these are variables we don't want to ever change in the code, we capitalize them

/* @pjs preload="betterTree.png"; */
PImage betterTreeImage;

//This function only runs once at the start of the program
void setup() {
  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window

  frameRate(30); //how many times the draw function is called per second

  betterTreeImage = loadImage("betterTree.png");

}


//called repeatedly
void draw() {

  background(BACKGROUND_COLOR); //needed in the draw function to "clear" the screen between updates

  slowLine.moveLine();

  fastLine.moveLine();

  testTree.drawAndUpdate();

}


//This is the definition of your object
//a class consists of:
//attributes which describes the object
//a constructor which sets the default values for the attributes
//and functions which manipulate/give information about the attributes
class HorizontalLine {

//attributes
  var yPos, speed; //float means they can be decimals

  //constructor
  //allows us to easily create different instances of our class
  HorizontalLine (float y, float s) {

    yPos = y;

    speed = s;

  }

  void moveLine() {
    updateLine();
    drawLine();
  }

  void updateLine() {

    yPos += speed;

  //height is a pre-defined variable that is the pixel value for the bottom of the screen
    if (yPos > height) {
      yPos = 0;
    }


  }

  void drawLine() {
    //width is a pre-defined variable that is the pixel value for the right of the screen
    line(0, yPos, width, yPos);
  }

}

class Tree {
  var xPosition;

  Tree(var xPos) {
    xPosition = xPos;
    }

    void drawTree() {
        image(betterTreeImage, xPosition, 100);
    }

    void update(var speed){
      xPosition -= speed;

      if (xPosition < -700) {
        xPosition = WINDOW_WIDTH + 300;
      }
    }

    void drawAndUpdate() {
      var treeSpeed = 5;
      drawTree();
      update(treeSpeed);
    }

}
