{
  "nodes": [
    {
      "id": "1",
      "type": "input",
      "data": { label: "Input" },
      "position": { x: 100, y: 50 }
    },
    {
      "id": "2",
      "type": "process",
      "data": { label: "Process" },
      "position": { x: 400, y: 50 }
    },
    {
      "id": "3",
      "type": "output",
      "data": { label: "Output" },
      "position": { x: 700, y: 50 }
    }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2" },
    { "id": "e2-3", "source": "2", "target": "3" }
  ]
}