class Scene extends Phaser.Scene{
    preload()
    {
        this.load.image('room', 'assets/img/room.png')
        this.load.image('chair', 'assets/img/chair.png')
        this.load.image('table', 'assets/img/table.png')
        this.load.audio('bam1', 'assets/sound/bam1.mp3')
        this.load.audio('bam2', 'assets/sound/bam2.mp3')
        this.load.audio('bam3', 'assets/sound/bam3.mp3')
    }

    create()
    {
        let room = this.add.image(0, 0, 'room').setOrigin(0,0)
        let chair = this.add.image(340, 200, 'chair').setOrigin(0,0)
        let table = this.add.image(500, 320, 'table').setOrigin(0,0)

        let bam1 = this.sound.add('bam1');
        let bam2 = this.sound.add('bam2');
        let bam3 = this.sound.add('bam3');


        this.input.keyboard.on('keydown-A', function () {
            if(chair.alpha === 0){
                bam1.play();
                chair.setAlpha(1)
            }
            else{
                bam2.play();
                chair.setAlpha(0)
            }
        }, this);
        this.input.keyboard.on('keydown-Z', function () {
            if(table.alpha === 0){
                bam2.play();
                table.setAlpha(1)
            }
            else{
                bam3.play();
                table.setAlpha(0)
            }
        }, this);

    }

    update()
    {
    }
}
