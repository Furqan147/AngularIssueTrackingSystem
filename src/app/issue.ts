export interface Issue {
    id : number,
    title : string,
    description : string,
    priority : 'Low' | 'High' | 'Critical',
    category : 'Feature' | 'Bug' | 'Documentation',
    completed? : Date
}
