let streaming=["video1", "video2", "video3"];
streaming.pop();
console.log(streaming);
streaming=["video1", "video2", "video3", "video4"];
streaming.splice(3, 1, "video5");