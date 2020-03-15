/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.pserrano";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/pserrano778/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Manuel",
				Photo: "persona1.jpg",
				Quote: "La vida no se ha hecho para comprenderla, sino para vivirla.",
				Age: 24,
				Occupation: "Acaba de terminar la carrera de Química",
				Family: "Hijo único",
				Location: "Vive solo en un piso alquilado de Madrid que se encuentra cerda de la facultad de Ciencias Químicas",
				Character: "Le gusta la montaña y disfrutar del aire libre, por lo que suele hacer senderismo",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Trabajar en el campo de la investigación", "Encontrar un grupo de personas para hacer rutas de senderismo", "Realizar un viaje a Noruega"],
				Frustrations: ["Le gustaría mejorar la relación con sus padres", "Le gustaría tener un grupo de amigos con el que comparta más aficiones"],
				Bio: "Vivía en Braojos de la Sierra, un pueblo de Madrid, junto a sus padres, pero, con el comienzo de sus estudios en la facultad de Ciencias Químicas en Madrid, su familia decidió que viviría en un piso alquilado cerca de la facultad, lo que enfrió la relación con sus padres. Aunque la relación con sus padres no es especialmente buena, estos han pagado sus gastos mientras estudiaba. Aunque ha conocido buenos amigos durante su vida universitaria, estos no comparten sus principales aficiones.",
				Tech: [
					{ Name: "TIC/Internet", Value: 3 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Desde que termino sus estudios lleva pensando en realizar algún viaje con sus ahorros antes de adentrarse en el mundo laboral, ya que le preocupa su tiempo libre una vez comience a trabajar. ",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 0 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Gloria",
				Photo: "persona2.jpg",
				Quote: "La pereza no es más que el hábito de descansar antes de estar cansado",
				Age: 50,
				Occupation: "Trabaja como recepcionista en un hotel de Valencia(Capital)",
				Family: "Actualmente se encuentra divorciada. Tiene una hija de 24 años",
				Location: "Vive sola en una casa en Sagunto-Valencia",
				Character: "Le gusta tener siempre algún plan para su tiempo libre, ir de viaje, visitar a su hija, etc",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Viajar a los Estados Unidos", "Aprender a desenvolverse mejor con la tecnología", "Aprender francés"],
				Frustrations: ["Le gustaría poder ver más a su hija", "Le gustaría conocer a un hombre con el que iniciar una relación", "Le gustaría mudarse a la capital"],
				Bio: "Siempre ha vivido en Sagunto, una localidad de Valencia cercana a la capital. Estudió filología inglesa en la universidad de Valencia. Gloria vivió con sus padres hasta que se casó con 25 años, que pasó a vivir con su pareja, Marcos, en la misma localidad. Con 26 años tuvo su primera y única hija, Sandra. Con 28 años fue contratada como recepcionista de un hotel de Valencia, en este trabajo por fin podría poner en práctica sus estudios debido a los turistas. Debido a la mala convivencia con su marido, Marcos, finalmente se divorció cuando tenía 43 años. Su Marido se mudó a la capital y ella vivió con su hija hasta que esta comenzó la universidad, debido a que Sandra tendría que irse a estudiar a Madrid. Actualmente Gloria continúa trabajando en el mismo hotel, y debido a que lleva viviendo en Sagunto toda su vida tiene muchos conocidos con los que a menudo hace planes como viajes durante un fin de semana, comidas, etc. Sandra trabaja en Madrid en una empresa de marketing, por lo que a Gloria le gusta despejar su agenda de vez en cuando para visitar a su hija.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 0 }
					
				], 
                Contextos:   "Gloria se encuentra en una situación estable, pero después de tantos años su vida es muy monótona. Le gustaría aprender un nuevo idioma como el francés para disminuir la monotonía del trabajo o mudarse a la capital." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])