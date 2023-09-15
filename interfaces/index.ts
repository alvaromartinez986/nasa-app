export interface Photo { 
    id: number,
    sol: number,
    camera: Camera,
    img_src: string,
    earth_date: string,
    rover: Rover
}

export interface Camera {
    id?: number,
    name: string,
    rover_id?: number,
    full_name: string
}

export interface Rover {
    id: number,
    namme: string,
    landing_date: string,
    launch_date: string,
    status: string,
    max_sol: string,
    max_date: Date,
    total_photos: number,
    cameras: Camera[]
}
 