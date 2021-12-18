class Scene extends Phaser.Scene{

    smoke(x,y,ecart){
        let particles4 = this.add.particles('smokeB1');
        particles4.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 5,
            alpha: 1,
            scale:.5,
            x: { min: x-ecart, max: x+ecart },
            y: { min: y-ecart, max: y+ecart }
        });
        let particles5 = this.add.particles('smokeB2');
        particles5.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 5,
            alpha: 1,
            scale:.5,
            x: { min: x-ecart, max: x+ecart },
            y: { min: y-ecart, max: y+ecart }
        });
        let particles6 = this.add.particles('smokeB3');
        particles6.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 5,
            alpha: 1,
            scale:.5,
            x: { min: x-ecart, max: x+ecart },
            y: { min: y-ecart, max: y+ecart }
        });
        let particles = this.add.particles('smokeW1');
        particles.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 10,
            alpha: 1,
            scale:.5,
            x: { min: x-ecart, max: x+ecart },
            y: { min: y-ecart, max: y+ecart }
        });
        let particles2 = this.add.particles('smokeW2');
        particles2.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 10,
            alpha: 1,
            scale:.5,
            x: { min: x-ecart, max: x+ecart },
            y: { min: y-ecart, max: y+ecart }
        });
        let particles3 = this.add.particles('smokeW3');
        particles3.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 10,
            alpha: 1,
            scale:.5,
            x: { min: x-ecart, max: x+ecart },
            y: { min: y-ecart, max: y+ecart }
        });
    }

    preload()
    {

        this.load.image('room', 'assets/img/room.png')
        this.load.image('chair', 'assets/img/chair.png')
        this.load.image('table', 'assets/img/table.png')
        this.load.image('smokeW1', 'assets/fx/smoke1white.png')
        this.load.image('smokeW2', 'assets/fx/smoke2white.png')
        this.load.image('smokeW3', 'assets/fx/smoke3white.png')
        this.load.image('smokeB1', 'assets/fx/smoke1black.png')
        this.load.image('smokeB2', 'assets/fx/smoke2black.png')
        this.load.image('smokeB3', 'assets/fx/smoke3black.png')
        this.load.audio('bam1', 'assets/sound/bam1.mp3')
        this.load.audio('bam2', 'assets/sound/bam2.mp3')
        this.load.audio('bam3', 'assets/sound/bam3.mp3')
        this.load.audio('ghost', 'assets/sound/ghost.mp3')

        for (let i=1;i<=10;i++){
            this.load.image('ghost'+i, 'assets/img/ghost/ghost_idle'+i+'.png')
        }
    }

    create()
    {
        let room = this.add.image(0, 0, 'room').setOrigin(0,0)
        let chairSpawn = false
        let tableSpawn = false
        let ghostSpawn = false

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




        let bam1 = this.sound.add('bam1');
        let bam2 = this.sound.add('bam2');
        let bam3 = this.sound.add('bam3');
        let ghost = this.sound.add('ghost');


        this.input.keyboard.on('keydown-A', function () {
            if(chairSpawn){
                this.smoke(360, 260, 10)
                this.chair.destroy()
                bam2.play();
                chairSpawn = false
            }
            else{
                this.smoke(360, 260, 10)
                this.chair = this.add.image(340, 200, 'chair').setOrigin(0,0)
                bam1.play();
                chairSpawn = true
            }
        }, this);
        this.input.keyboard.on('keydown-Z', function () {
            if(tableSpawn){
                this.smoke(550, 360, 30)
                this.tablee.destroy()
                bam3.play();
                tableSpawn = false
            }
            else{
                this.smoke(550, 360, 30)
                this.tablee = this.add.image(500, 320, 'table').setOrigin(0,0)
                bam2.play();
                tableSpawn = true
            }
        }, this);
        this.input.keyboard.on('keydown-E', function () {
            if(ghostSpawn){
                this.smoke(200, 320, 20)
                this.ghost.destroy()
                bam3.play();
                ghostSpawn = false
            }
            else{
                this.smoke(200, 320, 20)
                this.ghost = this.add.sprite(200, 300, 'ghost1').play('idle');
                ghost.play();
                ghostSpawn = true
            }
        }, this);
    }

    update()
    {
    }
}
