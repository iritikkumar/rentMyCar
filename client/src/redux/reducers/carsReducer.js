const initialData = {
    cars: [
        {
            "_id": "6405f63cf3cbae44b91b4f1c",
            "name": "Toyota Fortuner",
            "image": "https://wallpapers.com/images/hd/toyota-fortuner-legender-pearl-white-vvg7mvfp53kvs8n4.jpg",
            "capacity": 7,
            "fuelType": "Diesel",
            "bookedTimeSlots": [
                {
                    "from": "6/03/2023 10:00am",
                    "to": "8/03/2023 10:00am",
                    "_id": "6405f63cf3cbae44b91b4f1d"
                }
            ],
            "rentPerHour": 2000,
            "createdAt": "2023-03-06T14:18:36.156Z",
            "updatedAt": "2023-03-06T14:18:36.156Z",
            "__v": 0
        },
        {
            "_id": "6405f7dff3cbae44b91b4f1f",
            "name": "Mahindra Thar",
            "image": "https://imgd.aeplcdn.com/0x0/n/cw/ec/40087/thar-exterior-right-front-three-quarter-32.jpeg",
            "capacity": 4,
            "fuelType": "Diesel",
            "bookedTimeSlots": [
                {
                    "from": "6/02/2023 10:00am",
                    "to": "10/02/2023 12:00pm",
                    "_id": "6405f7dff3cbae44b91b4f20"
                }
            ],
            "rentPerHour": 1000,
            "createdAt": "2023-03-06T14:25:35.233Z",
            "updatedAt": "2023-03-06T14:25:35.233Z",
            "__v": 0
        },
        {
            "_id": "6405f836f3cbae44b91b4f22",
            "name": "Hyundai i20",
            "image": "https://www.cartoq.com/wp-content/uploads/2022/11/i20-0.jpg",
            "capacity": 5,
            "fuelType": "Diesel",
            "bookedTimeSlots": [
                {
                    "from": "10/02/2023 10:00am",
                    "to": "15/02/2023 12:00pm",
                    "_id": "6405f836f3cbae44b91b4f23"
                }
            ],
            "rentPerHour": 800,
            "createdAt": "2023-03-06T14:27:02.010Z",
            "updatedAt": "2023-03-06T14:27:02.010Z",
            "__v": 0
        },
        {
            "_id": "6405f8aef3cbae44b91b4f25",
            "name": "Hyundai Verna",
            "image": "https://imgd.aeplcdn.com/0x0/n/cw/ec/41197/verna-exterior-right-front-three-quarter-2.jpeg",
            "capacity": 5,
            "fuelType": "Petrol",
            "bookedTimeSlots": [
                {
                    "from": "10/04/2023 10:00am",
                    "to": "15/04/2023 11:00pm",
                    "_id": "6405f8aef3cbae44b91b4f26"
                }
            ],
            "rentPerHour": 800,
            "createdAt": "2023-03-06T14:29:02.199Z",
            "updatedAt": "2023-03-06T14:29:02.199Z",
            "__v": 0
        },
        {
            "_id": "6405f916f3cbae44b91b4f28",
            "name": "Range Rover Sports",
            "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Land-Rover/Range-Rover-Sport/9115/1653022703223/front-left-side-47.jpg",
            "capacity": 5,
            "fuelType": "Petrol",
            "bookedTimeSlots": [
                {
                    "from": "19/04/2023 10:00am",
                    "to": "20/04/2023 11:00pm",
                    "_id": "6405f916f3cbae44b91b4f29"
                }
            ],
            "rentPerHour": 3000,
            "createdAt": "2023-03-06T14:30:46.111Z",
            "updatedAt": "2023-03-06T14:30:46.111Z",
            "__v": 0
        },
        {
            "_id": "6405f95cf3cbae44b91b4f2b",
            "name": "BMW 5 series",
            "image": "https://images.hindustantimes.com/auto/img/2021/06/24/1600x900/The_new_BMW_5_Series_(6)_1624519084178_1624519090960.jpg",
            "capacity": 5,
            "fuelType": "Petrol",
            "bookedTimeSlots": [
                {
                    "from": "19/04/2023 10:00am",
                    "to": "20/04/2023 11:00pm",
                    "_id": "6405f95cf3cbae44b91b4f2c"
                }
            ],
            "rentPerHour": 2500,
            "createdAt": "2023-03-06T14:31:56.202Z",
            "updatedAt": "2023-03-06T14:31:56.202Z",
            "__v": 0
        },
        {
            "_id": "6405f9a1f3cbae44b91b4f2e",
            "name": "Rolls Royce",
            "image": "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/black-badge-ghost-2021/page-properties/Twin-Card-BB_RR21_RR21_Product_Page.jpg",
            "capacity": 5,
            "fuelType": "Petrol",
            "bookedTimeSlots": [
                {
                    "from": "21/04/2023 10:00am",
                    "to": "25/04/2023 11:00pm",
                    "_id": "6405f9a1f3cbae44b91b4f2f"
                }
            ],
            "rentPerHour": 10000,
            "createdAt": "2023-03-06T14:33:05.819Z",
            "updatedAt": "2023-03-06T14:33:05.819Z",
            "__v": 0
        },
        {
            "_id": "6405fa21f3cbae44b91b4f31",
            "name": "Hyundai Creta",
            "image": "https://www.namwheels.com/wp-content/uploads/2022/03/namwheels_2022-hyundai-grand-creta-launched_00.jpg",
            "capacity": 5,
            "fuelType": "Petrol",
            "bookedTimeSlots": [
                {
                    "from": "15/04/2023 10:00am",
                    "to": "16/04/2023 11:00pm",
                    "_id": "6405fa21f3cbae44b91b4f32"
                }
            ],
            "rentPerHour": 1500,
            "createdAt": "2023-03-06T14:35:13.913Z",
            "updatedAt": "2023-03-06T14:35:13.913Z",
            "__v": 0
        },
        {
            "_id": "6405fa65f3cbae44b91b4f34",
            "name": "Tata Harrier",
            "image": "https://www.team-bhp.com/sites/default/files/styles/amp_high_res/public/20230112_143108_0.jpg",
            "capacity": 5,
            "fuelType": "Diesel",
            "bookedTimeSlots": [
                {
                    "from": "12/04/2023 10:00am",
                    "to": "13/04/2023 11:00pm",
                    "_id": "6405fa65f3cbae44b91b4f35"
                }
            ],
            "rentPerHour": 1600,
            "createdAt": "2023-03-06T14:36:21.951Z",
            "updatedAt": "2023-03-06T14:36:21.951Z",
            "__v": 0
        }
    ]
};

export const carsReducer  = (state = initialData, action)=>{
    switch(action.type){

        case "GET_ALL_CARS": {
            return {
                ...state,
                cars: action.payload
            }

        }

        default: return state
    }
}