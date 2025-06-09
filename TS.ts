namespace demo{
    let x: number = 10;
    //类型推论
    let y = 20; // y的类型被推断为number
    let z = "hello"; // z的类型被推断为string
    //类型断言
    let a: any = "this is a string";
    let b = <string>a; // b的类型被推断为string
    
}