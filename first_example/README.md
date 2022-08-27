1. Application
2. Domain
3. Infraestructure




1. Capa donde son manejados los procesos de negocio, acá se pueden observar las funcionalidades que ofrece nuestra applicación. Las entidades del dominio son creadas y sujetas a actualización acá.
Dependiendo de los escenarios de uso, cuestiones como transacciones también son resueltas acá. 
2. Core de la aplicación. Capa donde se incluyen todas las REGLAS de negocio relacionadas a algun problema. Acá se almacenan entities, value Objects, aggregates, factories e interfaces. Esta capa por lo general no debe incluir dependencias y tampoco debería conocer sobre otras capas.
En esta capa se simula el proceso de negocio. Ignora el proceso de almacenamiento de datos. En esta capa es utilizada para abstracción, las interfaces (ej IUserRepository) son guardadas en esta capa
3. Esta capa va a ser la que accede a servicios externos como una database, servicios de mensajeria, etc. La interfaz IUserRepository diseñada en la capa de dominio y utilizada en la capa de aplicación también va a ser utilizada en esta capa y va a tener una "identidad" definida (se crearán objetos que implementen esta interfaz). 