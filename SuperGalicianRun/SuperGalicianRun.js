/*Global Phaser */
const config ={

    /*Indicar el tipo de juego */
   type: Phaser.AUTO, //webgl,canvas...

   /*Tamaño del juego y color de fondo */
   width: 256,
   height: 244,
   backgroundColor: '#049cd8',
   /*id del primer div del html */
   parent: 'game',
    //Fisicas
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300},
            debug: false,
        }
    },
   //Escena
   scene: {
        preload,    //Se ejecuta para recargar los recursos del juego
        create,     //Se ejecuta cuando el juego comienza
        update     //Se ejecuta en cada frame
   }
}

//Inicializar el juego
new Phaser.Game(config)
    //this -> game -> juego que estamos construyendo

//Funciones juego
function preload () {
    //Cargar Cielo
    this.load.image(
        'Cielo',
        'assets/Nubes/Sunny Cloud Background.png'
    )
    //cargar suelo
    this.load.image(
        'suelo1',
        'assets/Tierra/pixil-frame-0 (78).png'
    )
    this.load.image(
        'suelo2',
        'assets/Tierra/chao laranja.png'
    )
    //Cargar arboles
    this.load.spritesheet(
        'arbol1',
        'assets/Tierra/árboles/Image10000.png',
        { frameWidth: 16 , frameHeight:32}
    )
    //Cargar personaje
    this.load.spritesheet(
        'Mario',
        'assets/Personajes/MarioGaiteiro.png',
        { frameWidth: 18, frameHeight: 20 }
    )
    //Cargar enemigos
    this.load.spritesheet(
        'SantaCompa',
        'assets/Personajes/Enemigos/SantaCompa.png',
        { frameWidth:16 , frameHeight:16}
        
    )
        //Muerte enemigo
    this.load.spritesheet(
            'Santa_muerte',
            'assets/Personajes/Enemigos/SantaCompaña_muerte.png',
            { frameWidth:64 , frameHeight: 64 }
    )
    //Cargar GameCoin(percebe)
    this.load.spritesheet(
        'percebe',
        'assets/Objetos/Moneda(Percebe)/percebe2D.png',
        { frameWidth: 16 , frameHeight: 16 }
    )
}

function create () {
        //Mostrar Cielo
                //(X , Y , id del asset)
    this.add.image(256, 244, 'Cielo')
    .setScale(0.50)
    this.add.image(1200, 244, 'Cielo')
    .setScale(0.50)
    this.add.image(2144, 244, 'Cielo')
    .setScale(0.50)
    
     //Mostrar Suelo  
            //Este 'config' sale de la primera constante que se escribió  
    this.suelo = this.physics.add.staticGroup()
            //Guardar en objeto para uso de fisicas
    this.suelo
        .create(10, config.height+16,'suelo1')
        .setOrigin(0 ,0.5)
        .refreshBody()
    this.suelo
        .create(150, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()

    this.suelo
        .create(238, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(336, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(434, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(600, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(698, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(796, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(894, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(992, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(1190, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(1298, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(1396, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(1494, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(1592, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.suelo
        .create(1690, config.height-10,'suelo1')
        .setOrigin(0 , 0.5)
        .refreshBody()

        //Mostrar arboles
    this.arbol = this.physics.add.staticGroup()
    this.arbol.create(150,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(250,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(350,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(450,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(650,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(750,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(850,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(950,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()
    this.arbol.create(1050,config.height -83 , 'arbol1')
        .setScale(1.5)
        .setOrigin(0 , 0.5)
        .refreshBody()

        //Mostrar Personaje
    this.Mario = this.physics.add.sprite(50 , 205 , 'Mario')
    .setOrigin(0 , 1)
    .setCollideWorldBounds(true)
    .setGravityY(300)

        //Mostrar enemigo
        this.Enemigo = this.physics.add.group()
        for(var i = 0;i < config.width;i++){
            var x = Phaser.Math.RND.between(0, this.physics.world.bounds.width);
            this.Enemigo.create(x , 1)
        }
    
    
    //"Colisiones"
         //limites del mundo
        this.physics.world.setBounds(0/*x*/ , 0 /*Y*/, 2000/*ancho*/ ,config.height )
        //Colision arbol-suelo
        this.physics.add.collider(this.arbol , this.suelo)
        //Colision galego-suelo
        this.physics.add.collider(this.Mario , this.suelo)
        //Colision enemigo-suelo
        this.physics.add.collider(this.Enemigo , this.suelo)
        //Colision Galego-enemigo
        this.physics.add.collider(this.Mario , this.Enemigo , onHitEnemy ,null ,this)

        function onHitEnemy(Mario , Enemigo){
            console.log('Enemigo muerto')
            if( Mario.body.touching.down && Enemigo.body.touching.up ){
                Enemigo.anims.play('Muerte_Santa' , true)

                //Tiempo para destruilo
                setTimeout(() =>{
                    Enemigo.destroy()
                },450)
                  
            }else{
                //Muere MarioGaiteiro
                GalegoMorre(this)
            }
        }
    //camara
        this.cameras.main.setBounds(0/*x*/ , 0 /*Y*/, 2000/*ancho*/ ,config.height )
        //seguir personaje
        this.cameras.main.startFollow(this.Mario)

    //Objetos
        //Percebes(GameCoin)
        this.percebe = this.physics.add.staticGroup()
            //generados en pantalla
        this.percebe.create(150,150,'percebe').anims.play('giro' , true)
        this.percebe.create(300,170,'percebe').anims.play('giro' , true)
        this.percebe.create(610,170,'percebe').anims.play('giro' , true)
        this.percebe.create(650,170,'percebe').anims.play('giro' , true)
        this.percebe.create(700,170,'percebe').anims.play('giro' , true)
        //colision Personaje-percebe
        this.physics.add.overlap(this.Mario, this.percebe);
        //Colectar percebes
        function collectStar (Mario, percebe)
            {
                console.log('Percebe recogido')
                percebe.disableBody(true, true);
                
                //Mostrar puntuacion al recoger
                const scoreText = this.add.text(
                    percebe.x,
                    percebe.y,
                    "percebiño",
                    {
                        fontFamily: 'pixel',
                        fontSize: config.width / 25,
                        color:'000'
                    }
                )

                this.tweens.add({
                    targets:scoreText,
                    duration: 600,
                    y:scoreText.y -20,
                    onComplete: () =>{
                        this.tweens.add({
                            targets: scoreText,
                            duration:  200,
                            alpha: 0,
                            onComplete: () =>{
                                scoreText.destroy()
                            }
                        })
                    }
                })
            }
        //Superposicion Personaje-percebe
        this.physics.add.overlap(this.Mario, this.percebe, collectStar, null, this);


 //animaciones
    this.anims.create({ 
        //andar
        key: 'c-walk', //id
        frames: this.anims.generateFrameNumbers(
            'Mario' ,
            { start: 1 , end: 3 }
    ),
    frameRate: 10,
    repeat: -1
    })
        //idle
    this.anims.create({
        key: 'c-idle',
        frames: [{key: 'Mario' , frame: 0 }]

        //Saltar
    })
    this.anims.create({
        key: 'c-jump',
        frames: [{key: 'Mario' , frame: 5 }]

    })

        //morir
    this.anims.create({
        key:'c-dead',
        frames: [{key:'Mario' , frame: 4 }]
    })

        //Animacion moneda
    this.anims.create({
        key:'giro',
        frames: this.anims.generateFrameNumbers(
            'percebe',
            { start:0 , end:5 }
        ),
        frameRate:5,
        repeat: -1
    })
    
    //Animacion enemigo idle
    this.anims.create({
        key:'enemigo-idle',
        frames: this.anims.generateFrameNumbers(
            'SantaCompa',
            { start:0 , end: 3}
        ),
        frameRate: 5,
        repeat: -1
    })
        //Muerte-enemigo
    this.anims.create({
        key:'Muerte_Santa',
        frames: this.anims.generateFrameNumbers(
            'Santa_muerte',
            { start:0 , end:5}
        ),
        frameRate:12,
        repeat:-1

    })
       //Llaves manejo personaje
       this.keys = this.input.keyboard.createCursorKeys()

}

function update () {
    if(this.Mario.isDead) return

    if(this.keys.left.isDown){
        //Una vez cargada la animacion(funcion create)
        this.Mario.body.touching.down && this.Mario.anims.play('c-walk', true) 
        //Movimiento
        this.Mario.x -= 2
        //Girar personaje
        this.Mario.flipX = true
    } else if(this.keys.right.isDown){
        //Una vez cargada la animacion(funcion create)
        this.Mario.body.touching.down && this.Mario.anims.play('c-walk', true) 
        //Movimiento
        this.Mario.x +=2
        //Dejar de girar
        this.Mario.flipX = false
        //Uso de if para funcionamiento de animacion de salto
    } else if(this.Mario.body.touching.down){
        this.Mario.anims.play('c-idle' , true)
    }
        //saltar
    if (this.keys.up.isDown && this.Mario.body.touching.down){
        this.Mario.setVelocityY(-250)
        this.Mario.anims.play('c-jump' , true)
    }

    if(this.Mario.y >= config.height){
        GalegoMorre(this)
        //Respawnear
        setTimeout ( () => {
            this.scene.restart()
        }, 700)
    }
}

//Funcion morte
function GalegoMorre ({Mario , scene}){

    if(Mario.isDead) return

    Mario.isDead = true,
    Mario.anims.play('c-dead')
    Mario.setCollideWorldBounds(false)

    Mario.body.checkCollision.none = true

    setTimeout(() => {
        Mario.setVelocityY(-150)
        Mario.setVelocityX(-20)
    },100)

    setTimeout(() => {
        scene.restart()
    },900)
}
