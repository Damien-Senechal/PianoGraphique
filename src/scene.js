class Scene extends Phaser.Scene{
    preload()
    {
        this.load.image('yvesImg', 'assets/img/yves.jpg')
        this.load.video('yvesVid', 'assets/video/yves.mp4', 'loadeddata', false, false)
    }

    create()
    {

        // Add variables
        let yvesVideo = this.add.video(400,300, 'yvesVid')
        let yvesImg = this.add.image(400, 400, 'yvesImg')
        let textKeys = [
            'Press Space to see Yves',
            'Press A to listen Yves'
        ];
        let text1 = 'Hello World !'
        let textDisplay1 = this.add.text(40, 40, text1)

        let text = this.add.text(10, 10, textKeys, {font : '32px Courier', fill : '#00ff00'})
        textDisplay1.setAlpha(0)

        // Set scale for objects
        yvesVideo.setScale(0.5)
        yvesImg.setScale(0.5)

        // Make objects invisible
        yvesImg.setAlpha(0)
        yvesVideo.setAlpha(0)



        if (this.sound.locked)
        {
            text.setText('Click to start');

            this.sound.once('unlocked', function ()
            {
                text.setText(textKeys);
            });
        }

        this.input.keyboard.on('keydown-SPACE', function () {
            yvesVideo.setAlpha(1)
            yvesVideo.play(true)
            yvesVideo.play(true)
        }, this);

        this.input.keyboard.on('keydown-A', function () {
            if(yvesImg.alpha === 0){
                yvesImg.setAlpha(1)
            }
            else{
                yvesImg.setAlpha(0)
            }
        }, this);
    }

    displayText(textToDisplay){
        for(let i = 0; i < text.length; i++){
            console.log(textToDisplay[i])
        }
    }

    update()
    {

    }
}