import json

with open('mockdata.json', encoding='utf-8') as f:
    data = json.load(f)

def sql_value(val):
    if val is None:
        return 'NULL'
    if isinstance(val, bool):
        return 'TRUE' if val else 'FALSE'
    if isinstance(val, (int, float)):
        return str(val)
    return "'{}'".format(str(val).replace("'", "''"))

def insert_sql(table, rows):
    if not rows:
        return ''
    keys = rows[0].keys()
    lines = []
    for row in rows:
        values = [sql_value(row[k]) for k in keys]
        lines.append(f"({', '.join(values)})")
    sql = f"INSERT INTO {table} ({', '.join(keys)}) VALUES\n" + ",\n".join(lines) + ";\n"
    return sql

# Order matters! (reference tables first)
order = [
    'roles',
    'statuses',
    'categories',
    'divisions',
    'users',
    'missions',
    'initiatives',
    'news_articles',
    'recognition_posts',
    'initiative_divisions',
    'initiative_members',
    'mission_honorees',
    'mission_honored_initiatives',
    'honorees',
    'likes',
    'initiative_status_history',
    'initiative_kpis',
    'initiative_kpi_data',
    'comments',
    'documents',
    'qa_items'
]

with open('seed_mockdata.sql', 'w', encoding='utf-8') as f:
    for table in order:
        f.write(f"-- {table}\n")
        f.write(insert_sql(table, data[table]))
        f.write('\n')

print("SQL insert script written to seed_mockdata.sql")