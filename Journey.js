/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.pserrano";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/pserrano778/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Manuel",
                Photo: "persona1.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere realizar un viaje antes de verano con sus ahorros.",
                touch1: "agenda",
                feel1: "4",
                con1: "Quiere viajar a una zona donde pueda hacer senderismo",
                ima1: "cartoon-going.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Busca en internet ofertas de alojamientos baratos en la montaña",
                touch2: "Ordenador",
                feel2: "3",
                con2: "La mayoría de las ofertas que encuentra son incompatibles para él, debido al precio y las fechas. Ha perdido bastante tiempo en buscar por internet.",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Tras comentar su plan con un amigo este le recomienda que visite Cazorla (Jaen), por lo qu decide que ese será su destino",
                touch3: "Móvil (llamada)",
                feel3: "4",
                con3: "Debe tener en cuenta el transporte para la ida y vuelta",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encuentra la página \"Habitoom\", en la cual comienza buscar habitaciones baratas para alojarse mientras está de viaje.",
                touch4: "Ordenador",
                feel4: "3",
                con4: "No encuentra muchas habitaciones asequibles en el destino que eligió que muestren información de contacto, para comunicarse con el propietario fuera de la página web",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Finalmente encuentra dos habitaciones baratas y se pone en contacto con los dueños para preguntar el tiempo mínimo de estancia en ellas",
                touch5: "móvil (whatsapp)",
                feel5: "1",
                con5: "En ambas el tiempo mínimo que debe pagar es de un mes, pero Manuel tenía pensado estar de viaje como máximo un par de semanas",
                ima5: "cartoon-phoning.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "No alquila ninguna de las habitaciones que encontró en Habitoom, cree que la página da muy poca flexibilidad para la gente que busca alojamiento durante un corto periodo de tiempo, por lo que decide buscar en otras páginas",
                touch6: "ordenador",
                feel6: "1",
                con6: "Esta última semana ha invertido mucho tiempo en planificar los aspectos de su viaje, pero finalmente no ha conseguido encontrar alojamiento, y va a tener que continuar buscando en otras páginas si quiere llevar a cabo el viaje.",
                ima6: "cartoon-PChard.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Gloria",
                Photo: "persona2.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Una amiga suya le comentó que está pensando en mudarse a la capital. Gloria pensó en que podría mudarse con ella y cambiar de aires",
                touch1: "Amiga",
                feel1: "5",
                con1: "Quiere algo relativamente barato donde acepten a 2 personas, y, si es posible, que sea cercano al hotel donde trabaja",
                ima1: "cartoon-speaking.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Gloria decide ir a una agencia inmobiliaria para ver las ofertas de pisos que tienen para alquilar",
                touch2: "Servicio (agencia inmoviliaria)",
                feel2: "2",
                con2: "Una vez llega a la inmoviliaria y comenta su caso con un empleado de la agencia piensa que el proceso es confuso y llevaría mucho tiempo",
                ima2: "cartoon-sad.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Gloria comenta con su hija el problema y esta le propone que en vez de alquilar un piso podría alquilar habitación en uno. Le sugiere la web \"Habitoom\"",
                touch3: "Teléfono (Llamada)",
                feel3: "3",
                con3: "Quiere buscar a una mujer que esté trabajando y que ofrezca 2 habitaciones para alquilar",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Busca habitaciones en la capital, que estén cerca del hotel en el que trabaja",
                touch4: "Oredenador",
                feel4: "2",
                con4: "Hay poca información acerca de los propietarios y, con la mayoría de ellos, solo es posible contactar a través de la web",
                ima4: "cartoon-PCangry.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Tras encontrar a una propietaria que ofrecía 2 habitaciones a mujeres se registra en la web y se pone en contacto con ella.",
                touch5: "Ordenador",
                feel5: "1",
                con5: "Cuando contacta con la propietaria esta rechaza debido a que según el perfil de Gloria era un hombre. Debido a que Gloria no modificó los aspectos predeterminados de su perfil la propietaria pensó que era una broma.",
                ima5: "cartoon-PChard.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Tras aclarar el malentendido con la propietaria finalmente esta acepta que Gloria vaya con su amiga a visitar el piso en los próximos días",
                touch6: "Ordenador (Queda con la propietaria para visitar el piso en unos días)",
                feel6: "3",
                con6: "La web solo pone en contacto a las personas, por lo que debe desplazarse para realizar todos los trámites",
                ima6: "cartoon-PCtyping.png",
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



