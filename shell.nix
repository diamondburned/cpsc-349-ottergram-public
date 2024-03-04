{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
	packages = with pkgs; [
		nodejs
	];
	shellHook = ''
		export PATH="$PATH:${builtins.toString ./.}/node_modules/.bin"
	'';
}
