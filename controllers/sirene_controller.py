from flask import Blueprint, jsonify, session
from services.arduino_service import acionar_sirene

sirene_bp = Blueprint("sirene", __name__)

@sirene_bp.route("/", methods=["POST"])
def ativar_sirene():
    if acionar_sirene():
        return jsonify({"message": "Sirene acionada!"})
    return jsonify({"error": "Erro ao acionar a sirene"}), 500

