{
"dataset": {
    "model_rev": 1,
    "name": "MVRDarenia",
    "unique_keys": ["id"], 	
    "label": "Дарения към МВР",
    "description": "Дарения към МВР",
    "currency": "BGN"
  },

"mapping": {
    "from": {
      "fields": [  {"column": "daritel", "name": "label", "datatype": "constant"}  ],
      "type": "entity",
      "description": "Дарено от",
      "label": "Дарител"
    },

    "to": {
      "fields": [  {"column": "nadaren", "name": "label", "datatype": "constant"}   ],
      "type": "entity",
      "description": "Дарено на",
      "label": "Надарен"
    },

    "id": {
      "default_value": "",
      "description": "",
      "column": "id",
      "label": "Record Identifier",
      "datatype": "string",
      "type": "value"
    },
    "time": {
      "column": "date",
      "type": "value",
      "label": "Дата",
      "description": "",
      "datatype": "date"
    },
    "amount": {
      "default_value": "",
      "description": "",
      "column": "suma",
      "label": "",
      "datatype": "float",
      "type": "value"
    },

    "predmet": {
      "fields": [ { "column": "predmet", "datatype": "string",  "default_value": "", "constant": "",  "name": "label" } ],
      "label": "Дарено имущество",
      "type": "classifier",
      "description": "Обект на дарение",
      "taxonomy": "MVRDarenia:predmet"
    }, 

    "nadaren": {
      "fields": [ { "column": "nadaren", "datatype": "string",  "default_value": "", "constant": "",  "name": "label" } ],
      "label": "Надарен",
      "type": "classifier",
      "description": "Дарено на",
      "taxonomy": "MVRDarenia:nadaren"
    }, 
    
    "daritel": {
      "fields": [ { "column": "daritel", "datatype": "string", "default_value": "",  "constant": "", "name": "label" } ],
      "label": "Дарител",
      "type": "classifier",
      "description": "Дарител",
      "taxonomy": "MVRDarenia:daritel"
    }
  }, 

"views": [
    {
      "entity": "dataset",
      "label": "Обект на дарения",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "predmet",
      "filters": {"name": "MVRDarenia:predmet"}
    },
    {
      "entity": "dataset",
      "label": "Дарители",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "daritel",
      "filters": {"name": "MVRDarenia:daritel"}
    },
  {
      "entity": "dataset",
      "label": "Дарители",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "nadaren",
      "filters": {"name": "MVRDarenia:nadaren"}
    }



] 

} 
