export default function deep_object_copy(original_object) {
    return JSON.parse(JSON.stringify(original_object));
}