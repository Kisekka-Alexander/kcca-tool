# Copyright (c) 2022, Veritas Interactive and contributors
# For license information, please see license.txt


import frappe
from frappe import _ 

def execute(filters=None):
	return get_columns(), get_data(filters)

def get_data(filters):
	print(f"\n\n\n\n\{filters}\n\n\n\n")
	return [
		["P1"],
		["P2"],
		["P3"],
		["P4"],
		["P5"],
		["P6"],
		["P7"]

	]


def get_columns():
	return ["Class: Data:60"]
