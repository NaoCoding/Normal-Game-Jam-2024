// 切換道具紀錄背包視窗的顯示與隱藏
async function toggleInventory() {
  document.getElementById("BtnSuccess_Sound").play();
  if(isControlingCharacter == 1){
    if (showInventory) {
      update_inventory();
      console.log(computerKeyState);
      inventoryWindow.hide();
      InventoryInterface();
    } else {
      update_inventory();
      InventoryInterface();
      inventoryWindow.show();
      
    }
    showInventory = !showInventory;
    await delay(500)
    document.getElementById("BtnSuccess_Sound").pause();
    document.getElementById("BtnSuccess_Sound").currentTime = 0;
  }
}
// 切換顏色的按鈕外觀
function ColorChangedButton(button) {
  button.style("zIndex:5");
  button.style("padding: 10px 20px; font-size:16px");
  button.style("color", "white");
  //   button.style("background", "linear-gradient(135deg, #42a5f5, #478ed1)");
  button.style(
    "background",
    `url('image/colorChanged0.png') no-repeat center center white`
  );
  button.style("background-size", "contain");
  button.style("background-color", "white");
  button.style("width: 80px; height: 80px");
  button.style("border: none; border-radius: 20px");
  button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  button.style("cursor: pointer");
  button.style("transition", "all 0.3s");
  button.mouseOver(() => {
    // button.style("background", "linear-gradient(135deg, #478ed1, #42a5f5)");
    button.style("box-shadow", "0 6px 12px rgba(0, 0, 0, 0.3)");
  });
  button.mouseOut(() => {
    // button.style("background", "linear-gradient(135deg, #42a5f5, #478ed1)");
    button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  });
}
// 背包的外觀
function InventoryButton_Style(button) {
  button.style("padding: 10px 20px; font-size:16px");
  button.style("color", "white");

  button.style(
    "background",
    `url('image/inventory.png') no-repeat center center`
  );
  button.style("background-color: white");
  button.style("background-size", "contain");
  button.style("width: 80px; height: 80px");
  //   button.style("background", "linear-gradient(135deg, #42a5f5, #478ed1)");
  button.style("border: none; border-radius: 20px");
  button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  button.style("cursor: pointer");
  button.style("transition", "all 0.3s");
  button.mouseOver(() => {
    button.style("box-shadow", "0 6px 12px rgba(0, 0, 0, 0.3)");
  });
  button.mouseOut(() => {
    button.style("box-shadow", "0 4px 8px rgba(0, 0, 0, 0.2)");
  });
  button.style("zIndex:5");
}
// 點擊到切換顏色的按鈕時會觸發
function triggerColorChanged() {
  if(UnlockedStatus == 0){
    document.getElementById("BtnFailed_Sound").volume = 0.5
    document.getElementById("BtnFailed_Sound").play();
  }
  else{
    document.getElementById("cChangeSound").volume = 0.5
    document.getElementById("cChangeSound").play();
    BGM()
    if(isControlingCharacter == 1){
      if(ColorStatus < UnlockedStatus) ColorStatus += 1;
      else ColorStatus = 0
    }
  }
  
}

// 背包界面
function InventoryInterface() {
  // 創建道具紀錄背包視窗
  inventoryWindow = createDiv("");
  inventoryWindow.style("position", "absolute");
  inventoryWindow.style("top: 10%; left: 25%");
  inventoryWindow.style("width: 50%; height: 80%");
  inventoryWindow.style("background-color: rgba(255, 255, 255, 0.97)");
  inventoryWindow.style("border: 1px solid black");
  inventoryWindow.style("zIndex:10");

  title = createDiv("背包");
  title.parent(inventoryWindow);
  title.style("font-size: 24px; text-align: center; margin: 2% 0");
  // 關閉按鈕
  close = createDiv("X  ");
  close.parent(inventoryWindow);
  close.style("cursor: pointer");
  close.style("position", "absolute");
  close.style("top: 2%; right: 10px");
  close.mousePressed(toggleInventory);

  // 人物資訊
  charInfo = createDiv("");
  charInfo.parent(inventoryWindow);
  charInfo.style("position", "absolute");
  //   charInfo.style("left: 45%");
  //   charName.style("display: flex; align-items: center; justify-content: center");
  charInfo.style("width: 45%; height: 80%");
  //   charInfo.style("border: 1px solid black");

  // 人物照片
  char = createDiv("");
  char.parent(charInfo);
  char.style("position", "absolute");
  char.style("top: 5px; left: 12%");
  char.style("width: 70%; height: 45%");
  char.style("border: 1px solid black");

  // 人物名字
  charName = createDiv("Wlick");
  charName.parent(charInfo);
  charName.style("position", "absolute");
  charName.style("display: flex; align-items: center; justify-content: center");
  charName.style("top: 48%; left: 27%");
  charName.style("width: 35%; height: 10%");
  charName.style("border: 1px solid black");

  
  for (let i = 0; i < 15; i++) {
    item = createDiv("");
    item.style("width: 50px; height: 50px");
    item.style(
      "background-color: lightgrey; border: 1px solid black; border-radius: 10px"
    );
    item.style("display: flex; align-items: center; justify-content: center");
    collect.child(item);
  }

  inventoryWindow.hide(); // 初始狀態隱藏
}

function colorAndInventSetup() {
  colorButton = createButton("");
  colorButton.style("position", "absolute");
  colorButton.style("top: 5%; left: 3%");
  ColorChangedButton(colorButton);
  colorButton.mousePressed(triggerColorChanged);

  colorButton.hide();

  // 創建道具紀錄背包按鈕
  inventoryButton = createButton("");
  inventoryButton.style("position", "absolute");
  inventoryButton.style("top: 5%; right: 3%");
  InventoryButton_Style(inventoryButton);
  inventoryButton.mousePressed(toggleInventory);
  inventoryButton.hide();

  InventoryInterface();
}
