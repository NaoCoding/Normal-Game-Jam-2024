let livingroom_bigTable,livingroom_door2bed
let livingroom_door2outside,livingroom_door2parent
let livingroom_flower,livingroom_knife

function start_SceneLivingRoom(){
    
    mainCharacter.style("top:55%;left:20%")
    FlashLightWhite_getXY()

    MoveBorder = ["livingroom_bigTable","livingroom_door2bed","livingroom_door2outside","livingroom_door2parent"
                    ,"livingroom_flower"]
    PressEBorder = [0,1,2,3,4]
    WallBorder = [15,85,15,85]

    livingroom_bigTable = createImg("image/livingroom_bigTable.png","bed")
    livingroom_bigTable.style("position:absolute;top:32%;left:53%;width:17%;height:25%;");
    livingroom_bigTable.attribute("id","livingroom_bigTable")
    livingroom_bigTable.show()

    livingroom_door2bed = createImg("image/livingroom_door2bed.png","bed")
    livingroom_door2bed.style("position:absolute;top:59%;left:15%;width:3%;height:20%;");
    livingroom_door2bed.attribute("id","livingroom_door2bed")
    livingroom_door2bed.show()

    livingroom_door2outside = createImg("image/livingroom_door2outside.png","bed")
    livingroom_door2outside.style("position:absolute;top:81%;left:69%;width:11%;height:4%;");
    livingroom_door2outside.attribute("id","livingroom_door2outside")
    livingroom_door2outside.show()

    livingroom_door2parent = createImg("image/livingroom_door2parent.png","bed")
    livingroom_door2parent.style("position:absolute;top:15%;left:69%;width:11%;height:4%;");
    livingroom_door2parent.attribute("id","livingroom_door2parent")
    livingroom_door2parent.show()

    livingroom_flower = createImg("image/livingroom_flower.png","bed")
    livingroom_flower.style("position:absolute;top:79%;left:45%;width:12%;height:6%;");
    livingroom_flower.attribute("id","livingroom_flower")
    livingroom_flower.show()

    livingroom_knife = createImg("image/livingroom_knife.png","bed")
    livingroom_knife.style("position:absolute;top:30%;left:28%;width:10%;height:18%;");
    livingroom_knife.attribute("id","livingroom_knife")
    livingroom_knife.show()




}