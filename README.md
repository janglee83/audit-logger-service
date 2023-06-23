# audit-logger-service

Docs này có chức năng list thông tin các api được triển khai trong hệ thống này

## List API

| Name         |  Done   |
| :----------- | :-----: |
| List Event   |         |
| Update Event |         |
|              | &check; |

## Parameters

| **Type** | **Parameter** | **Description**               | **Example**      |
| -------- | ------------- | ----------------------------- | ---------------- |
| number   | `type=`       | SUCCESS = 1 OR FAILED = 0     | `?action=1`      |
| string   | `table=`      | name of the modified table    | `?table=learn`   |
| string   | `entity_id=`  | ID of the modified collection | `?entity_id=123` |

## Payload

| **Type** | **Payload**   | **Description**                                                                                      | **Example**    |
| -------- | ------------- | ---------------------------------------------------------------------------------------------------- | -------------- |
| number   | `action_name` | Type of the api which modified table or not. Value is 1, 2, 3, 4 represent to GET, POST, PUT, UPDATE | `action_id: 1` |
| object   | `data`        | Modified data, which have 3 parameters                                                               | below          |


## Example

### Index event

```http
POST https://{{domain}}?type={{status_type}}&table={{ table_name }}&entity_id={{ entity_id }}
X-Auth-Token: {{ACCESS_TOKEN}}
Content-Type: application/json
Accept: application/json

{
	"action_id": 0,
    	"data": {}
}
```

### Create event

```http
POST https://{{domain}}?type={{status_type}}&table={{ table_name }}&entity_id={{ entity_id }}
X-Auth-Token: {{ACCESS_TOKEN}}
Content-Type: application/json
Accept: application/json

{
	"action_id": 1,
	"data": {
		"old_data": "",
		"new_data": "some data",
  		"field_name": "A field name",
		"type": "String"
	}
}
```

### Update event

```http
POST https://{{domain}}?type={{status_type}}&table={{ table_name }}&entity_id={{ entity_id }}
X-Auth-Token: {{ACCESS_TOKEN}}
Content-Type: application/json
Accept: application/json

{
	"action_id": 2,
    	"data": {
		"old_data": "some data 1",
		"new_data": "some data 2",
  		"field_name": "A field name",
		"type": "String"
    	}
}
```

### Destroy event

```http
POST https://{{domain}}?type={{status_type}}&table={{ table_name }}&entity_id={{ entity_id }}
X-Auth-Token: {{ACCESS_TOKEN}}
Content-Type: application/json
Accept: application/json

{
	"action_id": 3,
    	"data": {}
}
```

