//Image courtesy of Wikimedia Commons (https://commons.wikimedia.org/wiki/File:F2andF16.svg)
onEvent("airframeButton", "click", function () {
  setScreen("airframeScreen");
});

//Image courtesy of xTech (https://xtech.nikkei.com/atcl/nxt/mag/nmc/18/00016/00020/?P=4)
onEvent("radarButton", "click", function() {
  setScreen("radarScreen");
});

//Image courtesy of Wikimedia Commons (https://commons.wikimedia.org/wiki/File:Ishikawajima-Harima_F110-IHI-129_turbofan_engine_left_front_low-angle_view_at_JASDF_Gifu_Air_Base_November_19,_2017.jpg)
onEvent("engineButton", "click", function() {
  setScreen("engineScreen");
});

//Image courtesy of The National Interest (https://nationalinterest.org/blog/buzz/japans-f-2-viper-zero-f-16-fighter-clone-scary-dangerous-208255)
onEvent("homeButton1", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton2", "click", function() {
  setScreen("homeScreen");
});
onEvent("homeButton3", "click", function() {
  setScreen("homeScreen");
});

//Sound from Alphasans404 on SoundCloud (https://soundcloud.com/soundfx_studio/m61-vulcan-firing-sound)
onEvent("soundButton1", "click", function() {
  playSound("assets/f-16-target-range-m61-vulcan-gatling-gun-made-with-Voicemod.mp3", false);
});