const Elements = [
    { name: 'color', type: 'string', value: 'Green' },
    { name: 'bold', type: 'boolean', value: true }
];

export const createStore = () => {
    return {
        get allElements() {
            return Elements;
        },
        getElementByName(name: string) {
            for (const element of Elements) {
                if (element.name === name) {
                    return element;
                }
            }
        },
        // setElementValue(name: string, value: any) {
        //     const element = this.getElementByName(name);
        //     element.value = value;
        //     // for (let i = 0; i < Elements.length; i++) {
        //     //     if (Elements[i].name === element.name) {
        //     //         Elements[i] = element;
        //     //     }
        //     // }
        // }
    };
};

export type TStore = ReturnType<typeof createStore>
