export interface User{
  id: string
  name: string
  username: string
  age: number
}

// No confundir una entity con los modelos de sequalize o mongoose
// Las entidades NO deben conocer sobre las dependencias que nosotros tenemos
