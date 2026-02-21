classDiagram
    class IAnimal {
        <<interface>>
        +Name: string
        +IsAlive: bool
        +Eat() void
        +Sleep() void
    }
    class Animal {
        <<abstract>>
        +Name: string
        #IsTooTired: bool
        +Eat() void
        #OnEat()* void
    }
    class Cat {
        +Move() void
    }
    class Owner {
        +Name: string
        +Pet: IAnimal
        +Feed() void
    }

    IAnimal <|.. Animal
    Animal <|-- Cat
    Animal <|-- Parrot
    Animal <|-- Snake
    IOwner <|.. Owner
    Owner "1" o-- "0..1" IAnimal : has pet
    AnimalSimulationService "1" *-- "*" IOwner : manages
