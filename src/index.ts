interface McmetaStructure {
    animation: {
        interpolate: boolean
        frametime: number
        frames: [
            (number | {
                index: number,
                time: number
            })
        ]
    }
}

