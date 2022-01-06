from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in kstool/__init__.py
from kstool import __version__ as version

setup(
	name="kstool",
	version=version,
	description="KCCA School tool",
	author="Veritas Interactive",
	author_email="info@veritas-interactive.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
