class Scene extends Phaser.Scene{

    smoke(x,y){
        let particles4 = this.add.particles('smokeB1');
        particles4.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 5,
            alpha: 1,
            scale:.5,
            x: { min: x-20, max: x+20 },
            y: { min: y-20, max: y+20 }
        });
        let particles5 = this.add.particles('smokeB2');
        particles5.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 5,
            alpha: 1,
            scale:.5,
            x: { min: x-20, max: x+20 },
            y: { min: y-20, max: y+20 }
        });
        let particles6 = this.add.particles('smokeB3');
        particles6.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 5,
            alpha: 1,
            scale:.5,
            x: { min: x-20, max: x+20 },
            y: { min: y-20, max: y+20 }
        });
        let particles = this.add.particles('smokeW1');
        particles.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 10,
            alpha: 1,
            scale:.5,
            x: { min: x-20, max: x+20 },
            y: { min: y-20, max: y+20 }
        });
        let particles2 = this.add.particles('smokeW2');
        particles2.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 10,
            alpha: 1,
            scale:.5,
            x: { min: x-20, max: x+20 },
            y: { min: y-20, max: y+20 }
        });
        let particles3 = this.add.particles('smokeW3');
        particles3.createEmitter({
            speed: 100,
            lifespan: { min: 800, max: 900 },
            maxParticles: 10,
            alpha: 1,
            scale:.5,
            x: { min: x-20, max: x+20 },
            y: { min: y-20, max: y+20 }
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
    }

    create()
    {
        let room = this.add.image(0, 0, 'room').setOrigin(0,0)
        let chairSpawn = false
        let tableSpawn = false


        let bam1 = this.sound.add('bam1');
        let bam2 = this.sound.add('bam2');
        let bam3 = this.sound.add('bam3');

        this.input.keyboard.on('keydown-A', function () {
            if(chairSpawn){
                this.chair.destroy()
                bam2.play();
                chairSpawn = false
            }
            else{
                this.smoke(360, 260)
                this.chair = this.add.image(340, 200, 'chair').setOrigin(0,0)
                bam1.play();
                chairSpawn = true
            }
        }, this);
        this.input.keyboard.on('keydown-Z', function () {
            if(tableSpawn){
                this.tablee.destroy()
                bam3.play();
                tableSpawn = false
            }
            else{
                this.smoke(550, 360)
                this.tablee = this.add.image(500, 320, 'table').setOrigin(0,0)
                bam2.play();
                tableSpawn = true
            }
        }, this);
    }

    update()
    {
    }
}
