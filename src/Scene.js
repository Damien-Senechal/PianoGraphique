class Scene extends Phaser.Scene{

    smoke(x,y,ecart,depth){
        for (let i=1; i<=6; i++){
            let L
            let number
            if(i<=3){
                L="B"
                number = 5
            }
            else{
                L="W"
                number =10
            }

            let particles = this.add.particles('smoke'+L+(i%3+1)).setDepth(depth)
            particles.createEmitter({
                speed: 100,
                lifespan: { min: 800, max: 900 },
                maxParticles: number,
                alpha: 1,
                scale:.5,
                depth : depth,
                x: { min: x-ecart, max: x+ecart },
                y: { min: y-ecart, max: y+ecart }
            });
        }
    }

    preload()
    {

        this.load.image('room', 'assets/img/room.png')
        this.load.image('chair', 'assets/img/chair.png')
        this.load.image('table', 'assets/img/table.png')
        this.load.image('opendoor', 'assets/img/opendoor.png')
        this.load.image('lightOff', 'assets/img/lightOff.png')

        this.load.image('smokeW1', 'assets/fx/smoke1white.png')
        this.load.image('smokeW2', 'assets/fx/smoke2white.png')
        this.load.image('smokeW3', 'assets/fx/smoke3white.png')
        this.load.image('smokeB1', 'assets/fx/smoke1black.png')
        this.load.image('smokeB2', 'assets/fx/smoke2black.png')
        this.load.image('smokeB3', 'assets/fx/smoke3black.png')

        this.load.audio('bam1', 'assets/sound/bam1.mp3')
        this.load.audio('bam2', 'assets/sound/bam2.mp3')
        this.load.audio('bam3', 'assets/sound/bam3.mp3')
        this.load.audio('ambiance', 'assets/sound/ambiance.wav')
        this.load.audio('off', 'assets/sound/switch_off.mp3')
        this.load.audio('on', 'assets/sound/switch_on.mp3')
        this.load.audio('ghost', 'assets/sound/ghost.mp3')
        this.load.audio('snake', 'assets/sound/snake.mp3')
        this.load.audio('openD', 'assets/sound/openD.mp3')
        this.load.audio('closeD', 'assets/sound/closeD.mp3')


        for (let i=1;i<=10;i++){
            this.load.image('ghost'+i, 'assets/img/ghost/ghost_idle'+i+'.png')
        }
        for (let i=1;i<=8;i++){
            this.load.image('snake'+i, 'assets/img/snake/snake'+i+'.png')
        }
    }

    create()
    {
        this.add.image(0, 0, 'room').setOrigin(0,0).setDepth(0)
        this.snake1 = this.add.sprite(400, 175, 'snake1').setOrigin(0,0).setDepth(1)

        let chairSpawn = false
        let tableSpawn = false
        let ghostSpawn = false
        let lightOff = false
        let snakeSpawn = false
        let doorOpen = false

        this.anims.create({
            key: 'idle',
            frames: [
                { key: 'ghost1' },
                { key: 'ghost2' },
                { key: 'ghost3' },
                { key: 'ghost4' },
                { key: 'ghost5' },
                { key: 'ghost6' },
                { key: 'ghost7' },
                { key: 'ghost8' },
                { key: 'ghost9' },
                { key: 'ghost10', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'snakeTongue',
            frames: [
                { key: 'snake2' },
                { key: 'snake3' },
                { key: 'snake4' },
                { key: 'snake5' },
                { key: 'snake6' },
                { key: 'snake7' },
                { key: 'snake8', duration: 50 }
            ],
            frameRate: 8,
            repeat: -1
        });




        let bam1 = this.sound.add('bam1', {volume: 0.5});
        let bam2 = this.sound.add('bam2', {volume: 0.5});
        let bam3 = this.sound.add('bam3', {volume: 0.5});
        let ghost = this.sound.add('ghost', {volume: 0.25});
        let off = this.sound.add('off', {volume: 0.25});
        let on = this.sound.add('on', {volume: 0.25});
        let snakeSound = this.sound.add('snake', {volume: .5});
        let openD = this.sound.add('openD', {volume: .5});
        let closeD = this.sound.add('closeD', {volume: .5});


        let ambiance = this.sound.add('ambiance', {volume: .25});
        ambiance.loop = true
        ambiance.play()

        //Spawn Chaise

        this.input.keyboard.on('keydown-A', function () {
            if(chairSpawn){
                this.smoke(360, 260, 10, 1)
                this.chair.destroy()
                bam2.play();
                chairSpawn = false
            }
            else if(lightOff === false){
                this.chair = this.add.image(340, 200, 'chair').setOrigin(0,0).setDepth(2)
                this.smoke(360, 260, 10, 2)
                bam1.play();
                chairSpawn = true
            }
        }, this);

        //Spawn Table

        this.input.keyboard.on('keydown-Z', function () {
            if(tableSpawn){
                this.smoke(550, 360, 30, 1)
                this.tablee.destroy()
                bam3.play();
                tableSpawn = false
            }
            else if(lightOff === false){
                this.tablee = this.add.image(500, 320, 'table').setOrigin(0,0).setDepth(2)
                this.smoke(550, 360, 30, 2)
                bam2.play();
                tableSpawn = true
            }
        }, this);

        //Spawn Fantome

        this.input.keyboard.on('keydown-E', function () {
            if(ghostSpawn){
                this.smoke(200, 320, 20, 1)
                this.ghost.destroy()
                bam3.play();
                ghostSpawn = false
            }
            else if(lightOff === false){
                this.ghost = this.add.sprite(200, 300, 'ghost1').play('idle', false).setDepth(2)
                this.smoke(200, 320, 20, 2)
                ghost.play();
                ghostSpawn = true
            }
        }, this);

        //Spawn Snake

        this.input.keyboard.on('keydown-R', function () {
            if(snakeSpawn){
                snakeSound.play();
                this.snake.destroy()
                this.snake1 = this.add.sprite(400, 175, 'snake1').setOrigin(0,0).setDepth(1)
                snakeSpawn = false
            }
            else{
                snakeSound.play();
                this.snake = this.add.sprite(400, 175, 'snake2').setOrigin(0,0).setDepth(1)
                this.snake.play('snakeTongue', false)
                this.snake1.destroy()
                snakeSpawn = true
            }
        }, this);

        //Open/Close Door

        this.input.keyboard.on('keydown-T', function () {
            if(doorOpen){
                closeD.play();
                this.door.destroy()
                doorOpen = false
            }
            else{
                openD.play();
                this.door = this.add.sprite(0, 0, 'opendoor').setOrigin(0,0).setDepth(0)
                doorOpen = true
            }
        }, this);


        this.input.keyboard.on('keydown-Q', function () {
            if(lightOff){
                on.play();
                this.light.destroy()
                lightOff = false
            }
            else{
                off.play();
                this.light = this.add.sprite(0, 0, 'lightOff').setOrigin(0,0).setDepth(100)
                lightOff = true
            }
        }, this);
    }

    update()
    {
    }

    /*
    this.ghost.once('animationcomplete', () => {
                    console.log('animationcomplete')
                    this.ghost.destroy()
                })
     */
}
