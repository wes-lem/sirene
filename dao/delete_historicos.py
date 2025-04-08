import sqlite3

conn = sqlite3.connect("sirene.db")
cursor = conn.cursor()

# Apagar todos os dados da tabela historico
cursor.execute("DELETE FROM historico")
conn.commit()

# Reinicia o autoincremento do ID (opcional)
cursor.execute("DELETE FROM sqlite_sequence WHERE name='historico'")
conn.commit()

conn.close()
print("🧹 Todos os registros da tabela 'historico' foram apagados com sucesso.")
