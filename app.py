import os

# 1. OUTPUT FILE NAME
OUTPUT_FILE = 'full_project_context.txt'

# 2. FOLDERS TO IGNORE (The "Noise")
IGNORE_DIRS = {
    'node_modules', '.git', '.next', 'dist', 'build', '.vscode', 
    'coverage', '.idea', '__pycache__'
}

# 3. FILES TO IGNORE (Large/Irrelevant files)
IGNORE_FILES = {
    'package-lock.json', 'yarn.lock', '.DS_Store', 
    'full_project_context.txt', 'generate_context.py',
    'logo.svg', 'favicon.ico' # Add specific assets if they clutter the list
}

# 4. FILE EXTENSIONS TO READ (The "Signal")
# We only want to read code and config.
ALLOWED_EXTENSIONS = {
    '.js', '.jsx', '.ts', '.tsx', 
    '.css', '.scss', '.html', 
    '.json', '.env', '.md'
}

def is_text_file(filename):
    return any(filename.endswith(ext) for ext in ALLOWED_EXTENSIONS)

def generate_codebase_file():
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as outfile:
        
        # HEADER
        outfile.write("GENSQUAD FULL STACK CONTEXT\n")
        outfile.write("===========================\n\n")

        # PART 1: PRINT DIRECTORY STRUCTURE (Tree View)
        outfile.write("1. PROJECT STRUCTURE:\n")
        outfile.write("=====================\n")
        
        for root, dirs, files in os.walk('.'):
            # Filter directories in-place
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            level = root.replace('.', '').count(os.sep)
            indent = ' ' * 4 * level
            outfile.write(f"{indent}{os.path.basename(root)}/\n")
            
            subindent = ' ' * 4 * (level + 1)
            for f in files:
                if f not in IGNORE_FILES:
                    outfile.write(f"{subindent}{f}\n")
        
        outfile.write("\n\n2. FILE CONTENTS:\n")
        outfile.write("=================\n")

        # PART 2: PRINT CODE CONTENTS
        for root, dirs, files in os.walk('.'):
            dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
            
            for file in files:
                if file in IGNORE_FILES: continue
                if not is_text_file(file): continue
                
                file_path = os.path.join(root, file)
                
                # Header for each file
                outfile.write(f"\n\n--- START OF FILE: {file_path} ---\n")
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as infile:
                        content = infile.read()
                        outfile.write(content)
                except Exception as e:
                    outfile.write(f"[Error reading file: {e}]")
                    
                outfile.write(f"\n--- END OF FILE: {file_path} ---\n")

if __name__ == "__main__":
    print(f"Generating {OUTPUT_FILE}...")
    generate_codebase_file()
    print(f"Done! Please upload '{OUTPUT_FILE}' to the AI chat.")