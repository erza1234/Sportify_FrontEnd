// import Facilities from "../pages/Facilities";
import { AvailabilitySlots } from "./AvailaibilitySlots";
import { FacilitiesInterface } from "./FacilitiesInterfac"

let clubFacilities: FacilitiesInterface[] = [
    {
        id: "1",
        name: 'Treadmill',
        location: 'Room-253',
        image: './image2.jpg',
        category: 'Gym',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "2",
        name: 'Stationary Bicycle',
        location: 'Room-254',
        image: './statBicycle.webp',
        category: 'Gym',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "3",
        name: 'Rowing Machine',
        location: 'Room-269',
        image: './rowing.jpg',
        category: 'Gym',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "4",
        name: 'Peck Deck-1',
        location: 'Room-293',
        image: './peckDeck.webp',
        category: 'Gym',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "5",
        name: 'Treadmill-2',
        location: 'Room-253',
        image: './image2.jpg',
        category: 'Gym',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "6",
        name: 'Pool-1',
        location: 'Pool Room-1',
        image: './pool1.jpg',
        category: 'Swimming Pool',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "7",
        name: 'Badminton-1',
        location: 'Badminton Room-1',
        image: './badminton1.webp',
        category: 'Badminton',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "8",
        name: 'Badminton-2',
        location: 'Badminton Room-2',
        image: './badminton2.jpg',
        category: 'Badminton',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "9",
        name: 'Badminton-3',
        location: 'Badminton Room-3',
        image: './badminton3.jpg',
        category: 'Badminton',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "10",
        name: 'Basketball-1',
        location: 'Room-295',
        image: './basketball1.jpg',
        category: 'Basket Ball',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "11",
        name: 'Basketball-2',
        location: 'Room-296',
        image: './basketball2.jpg',
        category: 'Basket Ball',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]

let availabilitySlots: AvailabilitySlots[] = [
    {
        id: 1,
        displayValue: '6:00 - 6:30 AM',
        from: new Date(2022, 6, 16, 6, 0, 0),
        to: new Date(2022, 6, 16, 6, 30, 0),
    },
    {
        id: 2,
        displayValue: '6:30 - 7:00 AM',
        from: new Date(2022, 6, 16, 6, 30, 0),
        to: new Date(2022, 6, 16, 7, 0, 0),
    },
    {
        id: 3,
        displayValue: '7:00 - 7:30 AM',
        from: new Date(2022, 6, 16, 7, 0, 0),
        to: new Date(2022, 6, 16, 7, 30, 0),
    },
    {
        id: 4,
        displayValue: '7:30 - 8:00 AM',
        from: new Date(2022, 6, 16, 7, 30, 0),
        to: new Date(2022, 6, 16, 8, 0, 0),
    },
    {
        id: 5,
        displayValue: '8:00 - 8:30 AM',
        from: new Date(2022, 6, 16, 8, 0, 0),
        to: new Date(2022, 6, 16, 8, 30, 0),
    }
]

export {clubFacilities, availabilitySlots};