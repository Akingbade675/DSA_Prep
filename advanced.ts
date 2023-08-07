type MyRecord<K extends keyof any, V> = {
    [key in K]: V
}

type Records = {
    [key: string]: string
}

type Record2 = {
    [key in 'a' | 'b']: string
}

type makeWindow<K extends keyof Window> = {
    [key in K]: Window[key]
}

type Window2 = makeWindow<'setTimeout' | 'clearTimeout'>

function MyObject(record: Pick<Window, 'setTimeout' | 'clearTimeout'>) {
    record.setTimeout(() => {})
}
